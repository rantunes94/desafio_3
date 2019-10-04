import * as React from "react";

export interface AddUsersProps {
  nome: string;
  morada: string;
  idade: number;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  addUsers: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

class AddUsers extends React.Component<AddUsersProps> {
  render(): JSX.Element {
    const { nome, morada, idade, handleChange, addUsers } = this.props;
    return (
      <div className="container shadow">
        <div className="form-group p-3">
          <h3 className="m-3">Add a new user!</h3>

          <input
            name="nome"
            value={nome}
            onChange={handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Name"
          ></input>

          <input
            name="morada"
            value={morada}
            onChange={handleChange}
            type="text"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Address"
          ></input>

          <input
            name="idade"
            value={idade}
            onChange={handleChange}
            type="number"
            className="form-control col-6 m-3"
            aria-describedby="helpId"
            placeholder="User Age"
          ></input>

          <button
            onClick={addUsers}
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
