import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './style.css'

export default class Menubar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>
                        <img src="./brandlogo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" >Home</Nav.Link>
                            <NavDropdown title="Loans" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" >Home Loan</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Personal Loan</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Car Loan</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Car Loan</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#register" >Register</Nav.Link>
                            <Nav.Link href="#login" >Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
