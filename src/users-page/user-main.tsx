import React from "react";
import AddUsers from "./usersAdd";
import ListUsers from "./usersList";

// import { useParams } from "react-router";

export interface UserProps {}

export interface UserState {
  nome: string;
  morada: string;
  idade: number;
  users: User[];
}

export interface User {
  // id: number;
  nome: string;
  morada: string;
  idade: number;
}

class ShowUser extends React.Component<UserProps, UserState> {
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
  handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    const { nome, morada, idade, users } = this.state;
    const userToAdd = { nome: nome, morada: morada, idade: idade };
    // se forem iguais posso "esconder" const userToAdd = { nome, morada,  idade };
    let usersCopy = [...users];
    usersCopy.push(userToAdd);

    this.setState({
      users: usersCopy,
      nome: "",
      morada: "",
      idade: 0
    });
    alert("User added with success!");
    localStorage.setItem("users", JSON.stringify(usersCopy));
    // setTimeout(() =>{
    //   console.log(users);
    // }, 1000);
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
            handleSubmit={this.handleSubmit}
          />
        ) : null}

        {window.location.href === "http://localhost:3000/user/users" ? (
          <ListUsers />
        ) : null}
      </div>
    );
  }
}

export default ShowUser;
