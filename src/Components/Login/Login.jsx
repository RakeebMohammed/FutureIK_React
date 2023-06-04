import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(false);
  const navigate = useNavigate();
  const collectData = async () => {
    let result = await fetch("https://futureik.onrender.com/login", {
      method: "post",
      body: JSON.stringify({ Email, Password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.id) {
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result.id));

      navigate("/");
    } else setError(true);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-100">
      <h3 className="text-3xl  text-blue-950 p-2 text-center">Login</h3>
      <input
        className="p-4 border-2 m-2"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter email"
      />
      <input
        className="p-4  border-2"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
      />
      {Error && <span>Enter valid credintials</span>}
      <button
        className="bg-white hover:bg-blue-400 hover:text-white border-2 rounded-full p-2 m-2"
        onClick={collectData}
        type="submit"
      >
        Login
      </button>
      <button className="text-black">
        <Link to="/forgotPassword"> Forgot Password ?</Link>
      </button>
      <p  className="text-black">Dont have an Account ? <Link to='/signup'>Signup</Link></p>
    </div>
  );
}

export default Login;
