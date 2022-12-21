import React, {useState} from "react";
import Link from "next/link";
import { Box, FormLabel, Input, FormControl, Button, Toast } from "@chakra-ui/react";
import { Toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const signup = () => {
 const [name,setName] = useState();
 const [email,setEmail] = useState();
 const [password,setPassword] = useState();
 const [age,setAge] = useState();

 const handleChange = (e) => {
    if(e.target.name === "name"){
       setName(e.target.value)
    }else if(e.target.email === "email"){
       setEmail(e.target.value)
    }else if(e.target.password === "password"){
       setPassword(e.target.value)
    }else if(e.target.age === "age"){
       setAge(e.target.value) 
    }
    
 }

 const handleSubmit =async (e) => {
    e.preventDefault();
    let data = {name,email,password,age}

let response = await fetch('http://localhost:3000/api/signup', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
 let res = await response.json();
 console.log(res)
    setName("")
    setEmail("")
    setPassword("")
    setAge("")

    Toast.success('😊 Your account has been created successfully!', {
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

    return div(
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
     <FormControl onSubmit={handleSubmit} >

     <FormLabel>Enter Name</FormLabel>
     <Input type='text' name="name" value={name} onChange={handleChange} />

     <FormLabel>Enter Email</FormLabel>
     <Input type='email' name="email" value={email} onChange={handleChange} />

     <FormLabel>Enter Password</FormLabel>
     <Input type='password' name="password" value={password} onChange={handleChange} />

     <FormLabel>Enter Age</FormLabel>
     <Input type='tel' name="age" value={age} onChange={handleChange} />

     <Button type="submit" >Register</Button>
    
     </FormControl>
     </Box>

     <Button>
        <Link href={"/login"} >Login</Link>
     </Button>
     </>
    )
}

export default signup;