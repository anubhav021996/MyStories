import React, { useState } from "react";
import {
  Box,
  FormLabel,
  Input,
  FormControl,
  Button,
  Heading,
} from "@chakra-ui/react";
// import "react-toastify/dist/ReactToastify.css";

const login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { email, password };
    console.log(data);

    let response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await response.json();
    console.log(res);

    localStorage.setItem("email", email);
    localStorage.setItem("token", res.token);
    setToken(res.token);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Heading textAlign="center" color="teal">
        Register
      </Heading>

      <Box w={400} margin="auto" mt={4}>
        <form onSubmit={handleSubmit}>
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

          <Button
            type="submit"
            mt={5}
            ml="40%"
            colorScheme="teal"
            fontSize="20px"
            borderRadius={10}
          >
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};

export default login;
