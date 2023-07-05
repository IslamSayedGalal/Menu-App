import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Form, Button, Row } from 'react-bootstrap'


export const NavBar = ({searchByWord}) => {

    const [searchWord, setSearchWord] = useState("");

    const clickSearch=()=>{
        e.preventDefault();
        searchByWord(searchWord);
        setSearchWord("");
    }

    return (
        <Row>
            <Navbar expand="lg" variant="dark" bg='dark'>
                <Container>
                    <Navbar.Brand href="#">
                        <div className='brand-color'>Restaurant</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e)=> setSearchWord(e.target.value)}
                                    value={searchWord}
                                />
                                <Button onClick={clickSearch} variant="outline-light">Search</Button>
                            </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    )
}

