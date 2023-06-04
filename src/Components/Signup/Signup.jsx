import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
function Signup() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [Error, setError] = useState(false);
  const navigate = useNavigate();

  const collectData = async () => {
   if(! Email || ! Password || ! Cpassword || ! Phone){
    setError('Please input all fields')
    return false
   }
    let result = await fetch("https://futureik-r.onrender.com/register", {
      method: "post",
      body: JSON.stringify({ Name, Email, Password, Cpassword, Phone }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.id) {
      navigate("/login");
    } else setError(result);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center  bg-slate-100 ">
      <h1 className="text-center text-blue-950 text-3xl  pb-2">
        Register
      </h1>
      <input
        value={Name}
        onChange={(e) => setName(e.target.value)}
        className="lg:w-1/6 md:w-2/6 sm:3/6  rounded-full p-4 border-2 m-2"
        type="text"
        placeholder="Enter name"
      />
      <input
        value={Phone}
        onChange={(e) => setPhone(e.target.value)}
        className="lg:w-1/6 md:w-2/6 sm:3/6 rounded-full p-4 border-2 m-2"
        type="number"
        placeholder="Enter phone number"
      />

      <input
        className="lg:w-1/6 md:w-2/6 sm:3/6 p-4 border-2 m-2 rounded-full"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter email"
      />
      <input
        className="lg:w-1/6 md:w-2/6 sm:3/6 p-4 border-2 m-2 rounded-full "
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
      />
      <input
        className="p-4 border-2 m-2 rounded-full lg:w-1/6 md:w-2/6 sm:3/6"
        value={Cpassword}
        onChange={(e) => setCpassword(e.target.value)}
        type="password"
        placeholder="Confirm password"
      />
      {Error && <span className="text-red-800">{Error}</span>}
      <button
        className="bg-white text-black px-5 hover:bg-blue-400 hover:text-white border-2 rounded-full p-2 m-2"
        onClick={collectData}
        type="submit"
      >
        Signup
      </button>
    <p className="text-black">   Already have an account ? <Link to='/login'>Login</Link></p>
    </div>
  );
}

export default Signup;
