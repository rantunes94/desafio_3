import React from "react";
import AddUsers from "./usersAdd";
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

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    //const value = e;
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  };

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

  render() {
    const { nome, morada, idade } = this.state;
    return (
      <div>
        {        
         (window.location.href === 'http://localhost:3000/user') ? <AddUsers
         nome={nome}
         morada={morada}
         idade={idade}
         handleChange={this.handleChange}
         handleSubmit={this.handleSubmit}
       />: null
        }
        
      </div>
      // <div className="container shadow">
      //   <div className="form-group p-3">
      //     <h3 className="m-3">Add a new user!</h3>

      //     <input
      //       name="nome"
      //       value={nome}
      //       onChange={this.handleChange}
      //       type="text"
      //       className="form-control col-6 m-3"
      //       aria-describedby="helpId"
      //       placeholder="User Name"
      //     ></input>

      //     <input
      //       name="morada"
      //       value={morada}
      //       onChange={this.handleChange}
      //       type="text"
      //       className="form-control col-6 m-3"
      //       aria-describedby="helpId"
      //       placeholder="User Address"
      //     ></input>

      //     <input
      //       name="idade"
      //       value={idade}
      //       onChange={this.handleChange}
      //       type="number"
      //       className="form-control col-6 m-3"
      //       aria-describedby="helpId"
      //       placeholder="User Age"
      //     ></input>

      //     <button
      //       onClick={this.handleSubmit}
      //       className="btn btn-outline-primary ml-3 mt-1 "
      //     >
      //       Submit
      //     </button>
      //   </div>
      // </div>
    );
  }
}

export default ShowUser;
