import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setUsers(data.data);
    });
  }, []);
  console.log(users);
  return (
    <div>
      {users.map((e) => (
        <p key={e.id}>
          <Link to={`/users/${e.id}`}>
            {e.id}. {e.first_name}
          </Link>
        </p>
      ))}
    </div>
  );
};
