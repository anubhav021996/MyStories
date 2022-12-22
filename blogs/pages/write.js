import {
  VStack,
  Input,
  Textarea,
  Button,
  Heading,
  Progress,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const write = () => {
  const [data, setData] = useState({});
  const [upload, setUpload] = useState(false);

  const handleChange = (e) => {
    const { value, name, files, type } = e.target;
    if (type != "file") setData({ ...data, [name]: value });
    else {
      setUpload(true);
      const picData = new FormData();
      picData.append("file", files[0]);
      picData.append("upload_preset", "myStories");
      axios
        .post("https://api.cloudinary.com/v1_1/dyocvbqbf/image/upload", picData)
        .then((res) => setData({ ...data, [name]: res.data.url }))
        .catch((e) => console.log(e))
        .finally(() => setUpload(false));
    }
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <VStack w={600} m={"auto"} mt={10}>
      <Heading mb={5}>Start writing your stories</Heading>
      <Input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <Textarea
        type="text"
        placeholder="Tell your story..."
        h={40}
        name="desc"
        onChange={handleChange}
      />
      <FormControl>
        <Input
          type="file"
          disabled={upload}
          name="image"
          onChange={handleChange}
        />
        {upload && <Progress size="xs" isIndeterminate />}
      </FormControl>
      <Input
        type="text"
        placeholder="Topic"
        name="topic"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} disabled={upload}>
        Submit
      </Button>
    </VStack>
  );
};

export default write;
