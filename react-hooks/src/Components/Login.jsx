import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginLoading,
  loginSuccess,
} from "../Redux/Login/actions";

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
    // `http://localhost:8080/users`

    dispatch(loginLoading());
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch(loginSuccess({ username, token: res.token })))
      .catch((err) => dispatch(loginFailure()));
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
