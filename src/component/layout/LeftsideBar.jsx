import ListGroup from "react-bootstrap/ListGroup";
import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/api";

const LeftsideBar = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        // console.log(data);

        setTitles(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      {titles.map((title) => (
        <ListGroup>
          <ListGroup.Item key={title.id}>{title.title}</ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
};

export default LeftsideBar;
