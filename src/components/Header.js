import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons'


import HeadStyle from "./Header.css";
//TODO: Fix Demo text

function Header() {
    return(
        <Navbar>
            <Navbar.Brand href="/">C-Uber</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-lg-12 header-search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
            </Navbar.Collapse>

            {/*Profile Dropdown*/}
            <div className='profile-container dropdown'>
                <Dropdown drop="down">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="profile" as="div">
                        T
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="profile"><FontAwesomeIcon icon={faUserAlt} />Profile</Dropdown.Item>
                        <Dropdown.Item href="account"><FontAwesomeIcon icon={faCreditCard} />Credit</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item href="logout">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Navbar>
    );

}

export default Header;