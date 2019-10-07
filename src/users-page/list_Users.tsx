import * as React from "react";
import { User } from "./main_Users";
import { Table } from "react-bootstrap";
import EditUsers from "./edit_Users";
import { withRouter } from "react-router";

export interface ListUsersProps {
  history?: any;
}

export interface ListUsersState {
  nome: string;
  morada: string;
  idade: number;
  users: User[];
}

export interface User {
  nome: string;
  morada: string;
  idade: number;
}

class ListUsers extends React.Component<ListUsersProps, ListUsersState> {
  constructor(props: ListUsersProps) {
    super(props);
    this.state = {
      users: [],
      nome: "",
      morada: "",
      idade: 0
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    let users: string | null = localStorage.getItem("users");
    let parsedUsers;
    if (users) {
      parsedUsers = JSON.parse(users);
    }
    this.setState({
      users: parsedUsers
    });
  };

  handleDelete = (name: string): void => {
    const nameSelected: string = name;

    let usersStoraged: string | null = localStorage.getItem("users");
    let parsedUsers;
    if (usersStoraged) {
      parsedUsers = JSON.parse(usersStoraged);
    }

    let usersCopy = [...parsedUsers];
    let filteredUsers = usersCopy.filter(user => user.nome !== nameSelected);

    this.setState(
      {
        users: filteredUsers
      },
      () => {
        localStorage.setItem("users", JSON.stringify(filteredUsers));
      }
    );
  };

  render(): JSX.Element {
    const { nome, morada, idade } = this.state;
    return (
      <div className="container">
        <div>
          <Table style={{ marginTop: "50px" }} striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Age</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => (
                <tr key={user.nome}>
                  <td>{user.nome}</td>
                  <td>{user.morada}</td>
                  <td>{user.idade}</td>
                  <td>
                    <button
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => this.handleDelete(user.nome)}
                      className="btn btn-danger col-4 ml-5"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        this.props.history.push(`/user/${user.nome}/edit`)
                      }
                      className="btn btn-primary col-4 ml-3 "
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* {window.location.href === "http://localhost:3000/user/edit" ? (
            <EditUsers
              nome={nome}
              morada={morada}
              idade={idade}
              handleChange={this.handleChange}
              handleEdit={this.handleEdit}
              // addUsers={this.addUsers}
            />
          ) : null} */}
        </div>
      </div>
    );
  }
}

export default withRouter<any, any>(ListUsers);
