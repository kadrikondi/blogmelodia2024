import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SideBar from "../layout/sideBar";
import React, { useState } from "react";

function CreatBlog() {
  const [title, setTitle] = useState("");
  const [blogDetail, setBlogDetail] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmitBlog = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },

          body: JSON.stringify({
            title: title,
            body: blogDetail,
            userId: author,
          }), // Set a default userId
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Post created:", data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <SideBar />
        </Col>

        <Col xs={4} className="mt-5">
          {title}
          {author}
          {blogDetail}
          <Form onSubmit={handleSubmitBlog}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="blog title"
                value={title}
                // onChange={(event) => setTitle(event.target.value)}
                onChange={handleTitleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="blog detail"
                value={blogDetail}
                onChange={(event) => setBlogDetail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="AUthor"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreatBlog;
