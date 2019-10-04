import * as React from "react";
import axios from "axios";

export interface PostProps {
  history?: any;
}

export interface PostState {
  posts: Post[];
  searchInput: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class ShowPost extends React.Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {
      posts: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error + "Didn't get the data");
      });
  }

  search = (): void => {
    const { searchInput } = this.state;
    console.log("aqui");
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${searchInput}`)
      .then(response => {
        this.setState({ posts: response.data });
        console.log(this.state.posts);
      })
      .catch(error => {
        console.log(error + "Didn't get the data");
      });
  };

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchInput: e.currentTarget.value
    });
  };

  render(): JSX.Element {
    const { posts } = this.state;

    return (
      <div className="container">
        <form className="form-group  mt-2">
          <div className="row border p-2 shadow">
            <div className="col-7 d-flex justify-content-end">
              <input
                style={{ width: "100%" }}
                className="form-control"
                onChange={this.onChangeInput}
                id="search-input"
                placeholder="Type an userId to search for his posts"
              ></input>
            </div>
            <div className="col-3 ">
              <button
                style={{ width: "100%", marginBottom: "12px" }}
                type="button"
                className="btn btn-outline-primary"
                onClick={this.search}
              >
                Search
              </button>
            </div>
          </div>
        </form>

        <div className="row p-3">
          {posts.map(post => (
            <div
              style={{ marginBottom: "15px" }}
              className="col-4 p-2 "
              key={post.id}
            >
              <div style={{ height: "100%", width: "100%" }} className="card ">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p style={{ fontSize: "18px" }} className="card-text">
                    {post.body}
                  </p>
                  <button
                    onClick={() =>
                      this.props.history.push(`post/${post.id}/comments`)
                    }
                    className="btn btn-primary"
                  >
                    Comments
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ShowPost;
