import React from 'react';
import {Navbar,Nav} from "react-bootstrap"
import { ButtonToggle ,Collapse} from '../Styles/Styled-header';
import {data} from "./Dates";
const Header = () => {
    return (
        <header>
            <Navbar expand="lg" id="home">
                <Navbar.Brand>Edie</Navbar.Brand>
                <ButtonToggle  aria-controls="Navbar">
                    <span></span><span></span><span></span>
                </ButtonToggle>
                <Collapse id="Navbar">
                    <Nav>
                        {data.map(item => <Nav.Link href={item.href} className="text-dark mx-3" key={item.id}>{item.text}</Nav.Link>)}
                    </Nav>
                </Collapse>
        </Navbar>
        </header>
    )
}

export default Header
