import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      navigate(0);
    } catch (error) {
      if (error.response?.status === 422) {
        setErrorMsg("All fields not filled");
      } else if (error.response?.status === 401) {
        setErrorMsg("Username or Password incorrect");
      } else {
        setErrorMsg("Login failed");
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
      <div className="logout-container">
        <div className="logout-card">
          <img src={require("./logout.jpg")} alt="" /> <br /> @{user.username},
          are you <br /> sure you want to log out?
          <br />
          <button className="logout-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="login-form">
        <img
          className="memories-logo"
          src="http://localhost:3000/memories1.png"
          alt=""
        />
        <h1>Log in to your account!</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="username"
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

          <button type="submit">Login</button>
        </form>
        <div id="errorMsg">{errorMsg ? errorMsg : ""}</div>

        <div />
      </div>
      <div className="photo-bg">
        <img src={require("./login-bg.jpg")} alt="" />
      </div>
    </div>
  );
}
export default Login;
