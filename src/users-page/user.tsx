import React from "react";

export interface UserProps {}

export interface UserState {
  users: User[];
  nameInput: string;
}

export interface User {
  id: number;
  nome: string;
  morada: string;
  idade: number;
}

const users = [
  { id: 1, nome: "John Doe", morada: "Rua Poeta", idade: 27 },
  { id: 2, nome: "Jane Doe", morada: "Rua José", idade: 35 },
  { id: 3, nome: "Terry Adams", morada: "Rua Falcão", idade: 53 },
  { id: 4, nome: "Jenny Smith", morada: "Rua Dragão", idade: 32 }
];

if (localStorage.getItem("users") !== null) {
  localStorage.setItem("users", JSON.stringify(users));
}

class ShowUser extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      users: [],
      nameInput: ""
    };
  }

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      nameInput: e.currentTarget.value
    });
  };

  render() {
    return (
      <div className="container shadow">
        <div className="form-group p-3">
          <h3 className="m-3">Add a new user!</h3>
          <input
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User ID"
          ></input>

          <input
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Name"
          ></input>

          <input
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Address"
          ></input>

          <input
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Age"
          ></input>

          <button className="btn btn-outline-primary ml-3 mt-1 ">Submit</button>
        </div>
      </div>
    );
  }
}

export default ShowUser;
