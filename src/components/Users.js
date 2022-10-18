import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h3>
        <Link to="1">user 1</Link>
      </h3>
      <h3>
        <Link to="2">user 2</Link>
      </h3>
      <h3>
        <Link to="3">user 3</Link>
      </h3>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active User
        </button>
        <button onClick={() => setSearchParams({})}>Reset User</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing Active User</h2>
      ) : (
        <h2>Showing All Users</h2>
      )}
    </div>
  );
};
