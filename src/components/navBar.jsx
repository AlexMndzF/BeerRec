import React from "react"
import { Link } from "react-router-dom"
import {Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>BeerRec</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to={"/"} style={{ textDecoration: 'none', color: '#007bff!important', marginRight:'2vh' }}>Home</Link>
                <Link to={"/all-beers"} style={{ textDecoration: 'none', color: '#007bff!important', marginRight:'2vh'}}>All Beers</Link>
                <Link to={"/new-beer"} style={{ textDecoration: 'none', color: '#007bff!important', marginRight:'2vh'}}>New Beer</Link>
                <Link to={"/random-beer"} style={{ textDecoration: 'none', color: '#007bff!important', marginRight:'2vh'}}>Random Beer</Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar