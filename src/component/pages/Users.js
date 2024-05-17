import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SideBar from "../layout/sideBar";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState(["fdffdf"]);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  return (
    <>
      <Row>
        <Col>
          <SideBar />
        </Col>
        <Col xs={8}>
          <Row xs={1} md={6} className="g-4 text-center">
            {users ? (
              users.map((user) => (
                <Card>
                  <Card.Img variant="top" src={user.avatar_url} />
                  <Card.Body>
                    <Card.Title>{user.login}</Card.Title>

                    <Button variant="primary">
                      {" "}
                      <a href={user.followers_url} style={{ color: "#fff" }}>
                        followers
                        {user.followers_url ? user.followers_url.length : null}
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <h1>loading</h1>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Users;
