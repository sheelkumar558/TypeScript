import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export const UserDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((d) => {
      setDetails(d.data.data);
    });
  }, []);

  return (
    <div>
      <img src={details.avatar} alt="avatar" />
      <p>{details.email}</p>
      <p>
        {details.first_name} {details.last_name}
      </p>
      <Link to="/">Back</Link>
    </div>
  );
};
