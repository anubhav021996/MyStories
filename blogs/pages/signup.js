import React, {useState} from "react";
import Link from "next/link";
import { Box, FormLabel, Input, FormControl, Button, Heading } from "@chakra-ui/react";
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
  method: 'POST', 
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

    return (
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

     <Box w={400}  margin="auto" mt={4} >
     <FormControl onSubmit={handleSubmit} >


     <FormLabel fontSize="20px" mt={3} color="teal">Enter Name</FormLabel>
     <Input type='text' name="name" value={name} onChange={handleChange} />

     <FormLabel fontSize="20px" mt={3} color="teal">Enter Email</FormLabel>
     <Input type='email' name="email" value={email} onChange={handleChange} />

     <FormLabel fontSize="20px" mt={3} color="teal">Enter Password</FormLabel>
     <Input type='password' name="password" value={password} onChange={handleChange} />

     <FormLabel fontSize="20px" mt={3} color="teal" >Enter Age</FormLabel>
     <Input type='tel' name="age" value={age} onChange={handleChange} />

     <Input type="submit" mt={4} w={100} ml="38%" backgroundColor="teal" color="white" fontSize="20px" borderRadius={10} />
    
     </FormControl>
     </Box>

     {/* <Button>
        <Link href={"/login"} >Login</Link>
     </Button> */}
     </>
    )
}

export default signup;