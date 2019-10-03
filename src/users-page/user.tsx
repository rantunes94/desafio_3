import React from "react";
// import { useParams } from "react-router";

export interface UserProps {}

export interface UserState {
  
  user: {
  nome: string;
  morada: string;
  idade: number;
  },

  users: User[];
}

export interface User {
  // id: number;
  nome: string;
  morada: string;
  idade: number;
}

// const users = [
//   { id: 1, nome: "John Doe", morada: "Rua Poeta", idade: 27 },
//   { id: 2, nome: "Jane Doe", morada: "Rua José", idade: 35 },
//   { id: 3, nome: "Terry Adams", morada: "Rua Falcão", idade: 53 },
//   { id: 4, nome: "Jenny Smith", morada: "Rua Dragão", idade: 32 }
// ];

// if (localStorage.getItem("users") !== null) {
//   localStorage.setItem("users", JSON.stringify(users));
// }

class ShowUser extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      user: {
        nome: '',
        morada: '',
        idade: 0
      },
      users: [],
    };
  }


   handleChange= (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  handleSubmit =(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) : void =>{
    event.preventDefault();
    this.setState(prevState => ({
      users : [...prevState.users , prevState.user],
      user : {nome :"" , morada :"" ,idade :0}     
    }));

  }

 

  render() {
    return (
      <div className="container shadow">
        <div className="form-group p-3">
          <h3 className="m-3">Add a new user!</h3>

          <input   value={this.state.user.nome}
          onChange={this.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Name"
          ></input>

          <input value={this.state.user.morada}
          onChange={this.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Address"
          ></input>

          <input value={this.state.user.idade} onChange={this.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Age"
          ></input>

          <button onClick={this.handleSubmit} className="btn btn-outline-primary ml-3 mt-1 ">Submit</button>
        </div>
      </div>
    );
  }
}

export default ShowUser;
