import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

const User = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

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
          <Card.Link href="#" onClick={handleShow}>
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
    </>
  );
};

export default User;
