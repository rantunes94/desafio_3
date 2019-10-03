import React from "react";
import "./main-page.css";
import ShowPost from "./post";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MostrarComments from "../comments-page/comment";
import ShowUser from "../users-page/user";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
                <NavLink className="dropdown-item text-black" to="/">
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
          <Route path="/user" exact component={ShowUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
