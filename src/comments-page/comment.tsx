import * as React from "react";
import axios from "axios";

export interface CommentProps {
  match?: any;
}

export interface CommentState {
  comments: Comment[];
  id: number;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

class MostrarComments extends React.Component<CommentProps, CommentState> {
  constructor(props: CommentProps) {
    super(props);
    this.state = {
      comments: [],
      id: this.props.match.params.id
    };
  }
  componentDidMount() {
    const { id } = this.state;

    if (!id) {
      alert("Didn't get a post id");
    } else {
      console.log("aqui");
      axios
        .get(` https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => {
          this.setState({ comments: response.data });
          console.log(this.state.comments);
        })
        .catch(error => {
          console.log(error + "Didn't get the data");
        });
    }
  }

  render(): JSX.Element {
    return (
      <div className="container">
        <h3 style={{ marginTop: "20px" }}>
          Comments on the post ID: {this.state.id}{" "}
        </h3>

        <table
          style={{ marginTop: "50px" }}
          className="table table-inverse table-inverse table-responsive"
        >
          <thead className="thead-inverse">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.comments.map(comment => (
              <tr key={comment.postId}>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MostrarComments;
