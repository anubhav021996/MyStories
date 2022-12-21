import React, {useState} from "react";
import Link from "next/link";
import { Box, FormLabel, Input, FormControl, Button, Toast } from "@chakra-ui/react";
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

        <Box>
        <FormControl onSubmit={handleSubmit}>

        <FormLabel>Enter Email</FormLabel>
        <Input type='email' name="email" value={email} onChange={handleChange} />

        <FormLabel>Enter Password</FormLabel>
        <Input type='password' name="password" value={password} onChange={handleChange} />

        <Button type="submit" >Login</Button>

        </FormControl>
        </Box>
        </>
    )
}

export default login;
