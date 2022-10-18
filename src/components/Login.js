import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectedPath = location.state?.path || "/";
  const handelLogin = () => {
    auth.login(user);
    navigate(redirectedPath, { replace: true });
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
