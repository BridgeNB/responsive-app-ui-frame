import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
// import appRoutes from '../routes/app.jsx';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  render() {
    return (<Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Lenois Ventures</a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={'Home'} href="/">
            Home
          </NavItem>
          <NavItem eventKey={'About'} href="/About">
            About
          </NavItem>
          <NavItem eventKey={'News'} href="/News">
            News
          </NavItem>
          <NavItem eventKey={'Portfolio'} href="/Portfolio">
            Portfolio
          </NavItem>
          <NavItem eventKey={'Team'} href="/Team">
            Team
          </NavItem>
          <NavItem eventKey={'Contact'} href="/Contact">
            Contact
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
  }
}

export default NavBar;
