import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Jeffrey Karikari",
          email: "jeffrey@gmail.com",
          gen: 12,
          id: "6578vbm0dngd",
        },
        {
          name: "Kojo Asenoo",
          email: "kojo@gmail.com",
          gen: 24,
          id: "34u44niou0349",
        },
        {
          name: "Adwoa Comfort",
          email: "adwoa@gmail.com",
          gen: 42,
          id: "3745ubuiog92342",
        },
      ],
    };
  }
  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };

  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers,
    });
  };

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col lg="4">
              <h4>Add Users</h4>
              <br />
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <h4>All Codetrain Users</h4>
              <br />
              <Users
                usersData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
