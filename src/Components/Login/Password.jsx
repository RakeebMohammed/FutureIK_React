import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Password() {
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Error, setError] = useState(false);
  const [Update, setUpdate] = useState(false);
  const [Password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [PassError, setPassError] = useState(false);
  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://localhost:3001/forgotPassword", {
      method: "post",
      body: JSON.stringify({ Email, Phone }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
console.log(result);
    if (result.result) {
      localStorage.setItem("id", result.result);

      setError(false);
      setUpdate(true);
    } else setError(result);
  };
  const UpdatePass = async () => {
    let Id = localStorage.getItem("id");
    let result = await fetch("http://localhost:3001/updatePassword", {
      method: "put",
      body: JSON.stringify({ Password, Cpassword, Id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    if (result.result) {
      console.log(result);
     
       navigate("/login");
    } else setPassError(true);
  };

  return (
    <div className="w-screen  h-screen flex flex-col justify-center items-center bg-slate-100">
      {!Update && (
        <h3 className="text-3xl flex justify-center items-start text-black p-2 text-center">
          Forgot Password{" "}
        </h3>
      )}
      {!Update && (
        <input
          className="lg:1/6 md:w-2/6 sm:3/6  p-4 border-2  m-2 rounded-full"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter registered email"
        />
      )}
      {!Update && (
        <input
          className="lg:1/6 md:w-2/6 sm:3/6  p-4 my-2 border-2 rounded-full"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="Enter registered number"
        />
      )}
      {Error && <span className="text-red-600">{Error}</span>}
      {!Update && (
        <button
          className="bg-white text-blue-400 hover:bg-blue-400 hover:text-black border-2 rounded-full p-2 m-2"
          onClick={collectData}
          type="submit"
        >
          Submit
        </button>
      )}
      {Update && (
        <h3 className="text-3xl  text-black p-2 text-center">Reset Password </h3>
      )}
      {Update && (
        <input
          className="lg:1/6 md:w-2/6 sm:3/6  p-4 border-2 m-2 rounded-full"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter a new password"
        />
      )}
      {Update && (
        <input
          className="lg:1/6 md:w-2/6 sm:3/6  p-4 my-2 border-2 rounded-full"
          value={Cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          type="password"
          placeholder="Confirm password"
        />
      )}
      {PassError && <span className="text-red-600">{PassError}</span>}
      {Update && (
        <button
          className="bg-white  text-blue-400 hover:bg-blue-400 hover:text-black border-2 rounded-full p-2 m-2"
          onClick={UpdatePass}
          type="submit"
        >
          Submit
        </button>
      )}
    
    </div>
  );
}

export default Password;
