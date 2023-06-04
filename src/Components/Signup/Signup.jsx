import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [Error, setError] = useState(false);
  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://localhost:3001/register", {
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
    } else setError(true);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center  bg-slate-500 ">
      <h1 className="text-center text-green-500 text-6xl underline pb-2">
        Register
      </h1>
      <input
        value={Name}
        onChange={(e) => setName(e.target.value)}
        className="w-1/6 rounded-full p-4 border-2 m-2"
        type="text"
        placeholder="Enter name"
      />
      <input
        value={Phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-1/6 rounded-full p-4 border-2 m-2"
        type="number"
        placeholder="Enter phone number"
      />

      <input
        className="p-4 border-2 m-2 rounded-full w-1/6"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter email"
      />
      <input
        className="p-4 border-2 m-2 rounded-full w-1/6"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
      />
      <input
        className="p-4 border-2 m-2 rounded-full w-1/6"
        value={Cpassword}
        onChange={(e) => setCpassword(e.target.value)}
        type="password"
        placeholder="Confirm password"
      />
      {Error && <span>Enter valid credintials</span>}
      <button
        className="bg-white px-5 hover:bg-blue-400 hover:text-white border-2 rounded-full p-2 m-2"
        onClick={collectData}
        type="submit"
      >
        Signup
      </button>
    </div>
  );
}

export default Signup;
