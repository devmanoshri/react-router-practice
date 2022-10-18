import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handelLogin = () => {
    auth.login(user);
    navigate("/profile");
  };
  return (
    <div>
      <label>
        Username:
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handelLogin}>Login</button>
    </div>
  );
};
