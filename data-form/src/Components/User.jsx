import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const User = (props) => {
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };
  return (
    <Col lg="3" style={{ border: ".2px solid gray", margin: "10px 10px" }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          Codetrain User
        </Card.Subtitle>
        <Card.Title>{props.userInfo.name}</Card.Title>
        <Card.Text>
          <p>Email: {props.userInfo.email}</p>
          <p>Gen: {props.userInfo.gen}</p>
        </Card.Text>
        <Card.Link href="#">
          <Button variant="primary" size="sm">
            Edit
          </Button>
        </Card.Link>
        <Card.Link href="#">
          <Button variant="danger" size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Link>
      </Card.Body>
    </Col>
  );
};

export default User;
