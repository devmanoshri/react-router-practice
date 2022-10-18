import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handelLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      Welcome {auth.user ? auth.user : "Guest!"}
      {auth.user && (
        <div>
          <button onClick={handelLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};
