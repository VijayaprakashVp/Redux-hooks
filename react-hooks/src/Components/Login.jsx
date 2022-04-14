import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Login/actions";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userDetails = {
      username,
      password,
    };
    // console.log(userDetails);

    dispatch(login(userDetails));
  };

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
