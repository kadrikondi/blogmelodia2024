import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Messo from "../../asset/messi.webp";
import { fetchUsers } from "../api/api";

const SideBar = () => {
  const [users, setUsers] = useState([]);

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
      <Link to="/userprofile">
        <Image
          src={Messo}
          roundedCircle
          style={{ width: "60px", padding: "10px" }}
        />{" "}
        <span>Lionel Messi</span>
      </Link>
      <br />
      {users
        ? users.map((user) => (
            <>
              <Link
                to={`/userprofile/${user.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <Image
                  src={user.avatar_url}
                  roundedCircle
                  style={{ width: "60px", height: "60px", padding: "10px" }}
                />{" "}
                <span>{user.login}</span> <br />
              </Link>
            </>
          ))
        : null}
    </div>
  );
};

export default SideBar;
