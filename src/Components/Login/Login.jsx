import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
   let Id=localStorage.getItem('id')
   const user = localStorage.getItem("user");
   if (user) navigate("/");
   else navigate("/login");
   if(Id){
    localStorage.removeItem("id")
    toast.success('Password changed successfully',{
    position:toast.POSITION.TOP_CENTER,autoClose:1000
   })}
   
  }, [])
  
  const collectData = async () => {
   if(!Email || !Password){
    setError('Please input all fields')
    return false
   }
    let result = await fetch("http://localhost:3001/login", {
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
    } else 
    console.log(result);
    setError(result);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-100">
      <h3 className="text-3xl  text-blue-950 p-2 text-center">Login</h3>
      <input
        className="rounded-full p-4 border-2 m-2"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter email"
      />
      <input
        className="rounded-full p-4  border-2"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
      />
      {Error && <span className="text-red-800">{Error}</span>}
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
      <ToastContainer/>
    </div>
  );
}

export default Login;
