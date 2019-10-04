import React from "react";
import "./main-page.css";
import ShowPost from "../posts-page/post";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MostrarComments from "../comments-page/comment";
import MainUsers from "../users-page/main_Users";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import EditUsers from "../users-page/edit_Users";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <NavLink className="nav-link text-white" to="/post">
            Home
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="User panel" id="collasible-nav-dropdown">
                <NavLink className="dropdown-item text-black" to="/user/users">
                  List of users
                </NavLink>
                <NavLink className="dropdown-item text-black" to="/user">
                  New user
                </NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Redirect from="/" to="/post" />
        <Switch>
          <Route path="/post" exact component={ShowPost} />
          <Route path="/post/:id/comments" component={MostrarComments} />
          <Route path="/user" exact component={MainUsers} />
          <Route path="/user/users" exact component={MainUsers} />
          <Route path="/user/:nome/edit" exact component={EditUsers} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
