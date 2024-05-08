import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BlogList() {
  return (
    <>
      {" "}
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Buhari travel to Daura kano state</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary"> read more</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>tinubu buy lambo</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary"> read more</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Buhari travel to Daura kano state</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary"> read more</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
}

export default BlogList;
