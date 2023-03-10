import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  FormLabel,
  Input,
  FormControl,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { name, email, password, age };
    console.log(data);

    let res = await axios.post(`/api/signup`, data);

    // let response = await fetch(`/api/signup`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // let res = await response.json();
    console.log(res);
    setName("");
    setEmail("");
    setPassword("");
    setAge("");

    if (res) {
      toast({
        title: "Account created.",
        description: "You account has been created successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      router.push("/login");
    }
  };

  return (
    <>
      <Heading textAlign="center" color="teal" mt={5}>
        Register
      </Heading>

      <Box w={400} margin="auto" mt={4}>
        <form onSubmit={handleSubmit}>
          <FormLabel fontSize="20px" mt={3} color="teal">
            Enter Name
          </FormLabel>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <FormLabel fontSize="20px" mt={3} color="teal">
            Enter Email
          </FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <FormLabel fontSize="20px" mt={3} color="teal">
            Enter Password
          </FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <FormLabel fontSize="20px" mt={3} color="teal">
            Enter Age
          </FormLabel>
          <Input
            type="tel"
            name="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />

          <Button
            type="submit"
            mt={5}
            ml="40%"
            colorScheme="teal"
            fontSize="20px"
            borderRadius={10}
          >
            Register
          </Button>
        </form>
      </Box>

      <Box>
        <Text textAlign="center">
          <span>If you are already a user then</span>{" "}
          <span>
            <u>
              <Link href={"/login"}>Login</Link>
            </u>{" "}
          </span>{" "}
        </Text>
      </Box>
    </>
  );
};

export default Signup;
