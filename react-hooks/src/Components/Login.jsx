import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Login/actions";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);

  const handleLogin = () => {
    const userDetails = {
      username,
      password,
    };
    // console.log(userDetails);

    dispatch(login(userDetails));
  };

  if (isAuthenticated) {
    // console.log("From isAuthenticated");
    return <Navigate to="/" />;
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
