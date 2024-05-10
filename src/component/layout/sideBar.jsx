import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";

import Messo from "../../asset/messi.webp";
import { fetchUsers } from "../api/api";

const SideBar = () => {
  const [user, setUsers] = useState(["fdffdf"]);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  return (
    <div style={{ backgroundColor: "grey", color: "white", height: "500px" }}>
      <Image
        src={Messo}
        roundedCircle
        style={{ width: "60px", height: "60px", padding: "10px" }}
      />{" "}
      <span>Lionel Messi</span> <br />
      {user.map((user) => (
        <>
          <Image
            src={user.avatar_url}
            roundedCircle
            style={{ width: "60px", height: "60px", padding: "10px" }}
          />{" "}
          <span>{user.login}</span> <br />
        </>
      ))}
    </div>
  );
};

export default SideBar;
