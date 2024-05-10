import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BlogList = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setBlog(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <>
      {blog.map((blo) => (
        <Card className="text-center mt-5">
          <Card.Body>
            <Card.Title> {blo.title}</Card.Title>
            <Card.Text>{blo.body}</Card.Text>
            <Button variant="primary"> {blo.id}read more</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default BlogList;

{
  /* {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))} */
}
