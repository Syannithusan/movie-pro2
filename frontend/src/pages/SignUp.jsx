import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const SignUp = () => {
  const navigate = useNavigate();
  const [username,setUSsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPasswod] = useState("");

  
  return (
   <div className="min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-8 py-5 "

   style={{ backgroundImage:
   "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/logg.jpg')"  , 
   }}>

    <div className="max-w-[450px] w-full bg-black bg-opacity-75 rounded px-8 py-14
    mx-auto mt-8">
      <h1 className="text-3xl font-medium text-white MB-7">Sign Up</h1>

      <form className="flex flex-col space-y-4">

        <input type="Cine Sith" 
        value={username}
        onChange={(e)=> setUSsername(e.target.value)}
        name="" id="" className="w-full h-[50px] bg-[#333]
         text-white rounded px-5 text-base"
         placeholder="cinesith"/> //username

        <input type="email" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        name="" id="" className="w-full h-[50px] bg-[#333]
         text-white rounded px-5 text-base"
         placeholder="cinesith@gmail.com"/> // email

        <input type="password" 
        value={password}
        onChange={(e)=> setPasswod(e.target.value)}
        name="" id="" className="w-full h-[50px] bg-[#333]
         text-white rounded px-5 text-base"
         placeholder="enter your password"/>
         <button type="submit " className="w-full bg-[#e50914] text-white py-2
         rounded text-base hover:opacity-90 cursor-pointer">
          Sign In
         </button>
      </form>
      <div className="mt-10 text-[#737373] text-sm">
        <p>Already Have an Account? 
          <span onClick={()=>navigate("/signin")} 
        className="text-white font-medium
        cursor-pointer ml-2 hover:underline">Sign In Now</span></p>
      </div>
    </div>
  </div>
  )
}

export default SignUp