import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiOutlineUserAdd } from "react-icons/ai";

const notify = () => toast("You have successfully created an account!");

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [fullname, setFullName] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        email,
        username,
        password,
        fullname,
      });
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("You have successfully created an account!");
      navigate("/");
      navigate(0);
      console.log(response);
    } catch (error) {
      if (error.response?.status === 422) {
        setErrorMsg("All fields not filled");
      } else if (error.response?.status === 423) {
        setErrorMsg("Someone is already using that username");
      } else if (error.response?.status === 400) {
        setErrorMsg("Password must be atleast 7 characters");
      } else {
        toast.error("Sign up failed");
      }
    }
  };

  function handleLogout() {
    localStorage.clear();
    navigate("/");
    navigate(0);
  }

  if (user) {
    return (
      <div>
        @{user.username}, you are already registered.
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  }

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <div className="register-form">
        <img
          className="memories-logo"
          src="http://localhost:3000/memories1.png"
          alt=""
        />
        <h1>Create a photographer account!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="username"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {" "}
            <AiOutlineUserAdd /> Signup
          </button>
        </form>
        <div id="errorMsg">{errorMsg ? errorMsg : ""}</div>
        <div />
      </div>
      <div className="photo-bg">
        <img src={require("./signup-bg.jpg")} alt="" />
      </div>
    </div>
  );
}
export default Signup;
