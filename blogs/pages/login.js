import React, { useState } from "react";
import {
  Box,
  FormLabel,
  Input,
  FormControl,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import Link from "next/link";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { email, password };
    console.log(data);

    let response = await fetch(`/api/login`, {
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

    if (res) {
      toast({
        title: "Account created.",
        description: "You have been logged in successfully!!",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      router.push("/");
    }
  };

  return (
    <>
      <Heading textAlign="center" color="teal">
        Login here
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

        <Text textAlign="center" mt={3}>
          <span>If you are new to website</span>{" "}
          <span>
            <u>
              <Link href={"/signup"}> signup first</Link>{" "}
            </u>
          </span>{" "}
        </Text>
      </Box>
    </>
  );
};

export default Login;
