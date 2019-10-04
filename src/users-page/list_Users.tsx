import * as React from "react";
import { User } from "./main_Users";
import { Table } from "react-bootstrap";

export interface ListUsersProps {}

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
    console.log(nameSelected);

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
    // const { users } = this.state;
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
                    <button className="btn btn-primary col-4 ml-3 ">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default ListUsers;
