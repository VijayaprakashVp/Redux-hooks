import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  const { token, username } = useSelector((state) => state.login);

  useEffect(() => {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setProfile(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <p>Name : {profile.name}</p>
      <p>Email : {profile.email}</p>
      <p>Description : {profile.description}</p>
      <p>Username : {profile.username}</p>
      <p>Token : {profile.token}</p>
      <p>Mobile Number : {profile.mobile}</p>
    </div>
  );
};
