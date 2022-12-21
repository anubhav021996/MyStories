import React, {useState} from "react";
import Link from "next/link";
import { Box, FormLabel, Input, FormControl, Button, Heading } from "@chakra-ui/react";
import { Toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
   
    const handleChange = (e) => {
       if(e.target.email === "email"){
          setEmail(e.target.value)
       }else if(e.target.password === "password"){
          setPassword(e.target.value)
       }
       
    }
   
    const handleSubmit =async (e) => {
       e.preventDefault();
       let data = {email,password}
   
   let response = await fetch('http://localhost:3000/api/login', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
   })
    let res = await response.json();
    console.log(res)
       setEmail("")
       setPassword("")
   
       if(res.success){
       Toast.success('😊 You are successfully logged in!', {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
           });
      }
    else{
    Toast.error(res.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
 }
 }

    return(
        <>
        <ToastContainer
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"
         />

        <Heading textAlign="center" color="teal">Register</Heading>   

        <Box  w={400}  margin="auto" mt={4}>
        <FormControl onSubmit={handleSubmit}>

        <FormLabel fontSize="20px" mt={3} color="teal">Enter Email</FormLabel>
        <Input type='email' name="email" value={email} onChange={handleChange} />

        <FormLabel fontSize="20px" mt={3} color="teal">Enter Password</FormLabel>
        <Input type='password' name="password" value={password} onChange={handleChange} />

        <Input type="submit" mt={4} w={100} ml="38%" backgroundColor="teal" color="white" fontSize="20px" borderRadius={10} />

        </FormControl>
        </Box>
        </>
    )
}

export default login;
