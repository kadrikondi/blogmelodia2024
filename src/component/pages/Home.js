import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "../layout/sideBar";
import BlogList from "./BlogList";
import LeftsideBar from "../layout/LeftsideBar";

function Home() {
  return (
    <>
      <Row className="">
        <Col>
          {" "}
          <SideBar />
        </Col>
        <Col xs={6}>
          {" "}
          <BlogList />{" "}
        </Col>
        <Col>
          <LeftsideBar />
        </Col>
      </Row>
    </>
  );
}

export default Home;
