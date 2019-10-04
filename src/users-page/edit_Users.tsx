import * as React from "react";

export interface EditUsersProps {
  match?: any;
  history: any;
}
export interface EditUsersState {
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

class EditUsers extends React.Component<EditUsersProps, EditUsersState> {
  componentDidMount() {
    const nameSelected: string = this.props.match.params.nome;
    let usersStoraged: string | null = localStorage.getItem("users");
    let parsedUsers;
    if (usersStoraged) {
      parsedUsers = JSON.parse(usersStoraged);
    }

    let usersCopy = [...parsedUsers];
    let filteredUser: User = usersCopy.find(user => user.nome === nameSelected);

    this.setState({
      nome: filteredUser.nome,
      morada: filteredUser.morada,
      idade: filteredUser.idade,
      users: usersCopy
    });
  }

  editUser = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    const nameSelected: string = this.props.match.params.nome;
    let usersStoraged: string | null = localStorage.getItem("users");
    let parsedUsers;
    if (usersStoraged) {
      parsedUsers = JSON.parse(usersStoraged);
    }

    let usersCopy = [...parsedUsers];
    let filteredUser: User = usersCopy.find(user => user.nome === nameSelected);

    usersCopy.forEach((user: User) => {
      if (nameSelected === user.nome) {
        user.nome = this.state.nome;
        user.morada = this.state.morada;
        user.idade = this.state.idade;
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(usersCopy));
    alert("User updated with sucess!");

    this.setState({
      users: usersCopy
    });

    this.props.history.goBack();
  };

  constructor(props: EditUsersProps) {
    super(props);
    this.state = {
      nome: "",
      morada: "",
      idade: 0,
      users: []
    };
  }

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  };

  render(): JSX.Element {
    // const { nome, morada, idade, editUser } = this.props;
    return (
      <div className="container shadow">
        <div className="form-group p-3">
          <h3 className="m-3">Edit a user!</h3>

          <input
            name="nome"
            value={this.state.nome}
            onChange={this.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Name"
          ></input>

          <input
            name="morada"
            value={this.state.morada}
            onChange={this.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Address"
          ></input>

          <input
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
            type="number"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Age"
          ></input>

          <button
            onClick={this.editUser}
            className="btn btn-outline-primary ml-3 mt-1 "
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default EditUsers;
