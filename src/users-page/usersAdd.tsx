import * as React from "react";

export interface AddUsersProps {
  nome: string;
  morada: string;
  idade: number;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

class AddUsers extends React.Component<AddUsersProps> {
  render() {
    const { nome, morada, idade, handleChange, handleSubmit } = this.props;
    return (
      <div className="container shadow">
        <div className="form-group p-3">
          <h3 className="m-3">Add a new user!</h3>

          <input
            name="nome"
            value={nome}
            onChange={this.props.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Name"
          ></input>

          <input
            name="morada"
            value={morada}
            onChange={this.props.handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Address"
          ></input>

          <input
            name="idade"
            value={idade}
            onChange={this.props.handleChange}
            type="number"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Age"
          ></input>

          <button
            onClick={this.props.handleSubmit}
            className="btn btn-outline-primary ml-3 mt-1 "
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddUsers;
