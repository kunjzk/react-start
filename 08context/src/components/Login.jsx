import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState("hi username");
  const [password, setPassword] = useState("hi password");

  const { setUser } = useContext(UserContext); // We extract a method responsible for setting data in the context

  const handleSubmit = (e) => {
    // prevent the page from refreshing
    e.preventDefault();
    setUser({ username, password });
    console.log(username, password);
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit">
        Login
      </button>
    </div>
  );
}

export default Login;
