import React from "react";
import AddUsers from "./add_Users";
import ListUsers from "./list_Users";
import EditUsers from "./edit_Users";

// import { useParams } from "react-router";

export interface UserProps {}

export interface UserState {
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

class MainUsers extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      nome: "",
      morada: "",
      idade: 0,
      users: []
    };
  }

  // Para lidar com a alteração do estado das inputs
  handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  };

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

  // Para adicionar um user ao array de users
  addUsers = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    try {
      event.preventDefault();

      const { nome, morada, idade } = this.state;
      const userToAdd = { nome: nome, morada: morada, idade: idade };
      let usersStored: string | null = localStorage.getItem("users");
      let parsedUsers;

      if (usersStored) {
        parsedUsers = JSON.parse(usersStored);
        let usersCopy = [...parsedUsers];
        usersCopy.push(userToAdd);

        this.setState({
          users: usersCopy,
          nome: "",
          morada: "",
          idade: 0
        });

        // Adiciona à minha local storage
        localStorage.setItem("users", JSON.stringify(usersCopy));
      } else {
        let usersCopy = [];
        usersCopy.push(userToAdd);

        this.setState({
          users: usersCopy,
          nome: "",
          morada: "",
          idade: 0
        });

        // Adiciona à minha local storage
        localStorage.setItem("users", JSON.stringify(usersCopy));
      }
      // Dou um alerta de sucesso
      alert("User added with success!");
    } catch (error) {
      console.log(error);
    }
  };

  render(): JSX.Element {
    const { nome, morada, idade } = this.state;
    return (
      <div>
        {window.location.href === "http://localhost:3000/user" ? (
          <AddUsers
            nome={nome}
            morada={morada}
            idade={idade}
            handleChange={this.handleChange}
            addUsers={this.addUsers}
          />
        ) : null}

        {window.location.href === "http://localhost:3000/user/users" ? (
          <ListUsers />
        ) : null}
      </div>
    );
  }
}

export default MainUsers;
