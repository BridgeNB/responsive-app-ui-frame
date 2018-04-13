import React, {Component} from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class HeaderLinks extends Component {
  render() {
    return (<div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Lenois Ventures</a>
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
            <NavItem eventKey={'Team'} href="/Team">
              Team
            </NavItem>
            <NavItem eventKey={'Contact'} href="/Contact">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>);
  }
}

export default HeaderLinks;
