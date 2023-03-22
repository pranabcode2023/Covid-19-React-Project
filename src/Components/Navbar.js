// import React from 'react'
// import { Link, NavLink, useLocation } from 'react-router-dom'

// function NavBar() {
//     const location = useLocation();
//     const linkStyle = {
//         color: "red",
//         fontSize: "large"
//     }

//     return (
//         <div>
//             <h1>NavBar</h1>
//             {/* <div style={{ display: "flex", gap: "1em" }}>
//         <Link style={location.pathname === '/' ? linkStyle : null} to='/'>HomePage</Link>
//         <Link style={location.pathname === '/about' ? linkStyle : null} to='about' state={ "send this message to about page" }>About</Link>
//       </div> */}

//             <div style={{ display: "flex", gap: "1em", textAlign: "center" }}>
//                 <NavLink to='/' style={({ isActive }) => isActive ? linkStyle : null}>HomePage</NavLink>
//                 <NavLink to='/about' style={({ isActive }) => isActive ? linkStyle : null}>About</NavLink>
//             </div>

//         </div>
//     )
// }

// export default NavBar


// import React from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function OffcanvasExample() {

//     const location = useLocation();
//     const linkStyle = {
//         color: "red",
//         fontSize: "large"
//     }

//     return (
//         <>
//             {
//                 [false].map((expand) => (
//                     <Navbar key={expand} bg="light" expand={expand} className="mb-3">
//                         <Container fluid>
//                             {/* <Navbar.Brand href="Homepage.js">Navbar Offcanvas</Navbar.Brand> */}

//                             <Link style={location.pathname === '/' ? linkStyle : null} to='/'>HomePage</Link>
//                             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                             <Navbar.Offcanvas
//                                 id={`offcanvasNavbar-expand-${expand}`}
//                                 aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                                 placement="end"
//                             >
//                                 <Offcanvas.Header closeButton>
//                                     <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                                         Offcanvas
//                                     </Offcanvas.Title>
//                                 </Offcanvas.Header>
//                                 <Offcanvas.Body>
//                                     <Nav className="justify-content-end flex-grow-1 pe-3">
//                                         {/* <Nav.Link href="#Homepage.js">Home</Nav.Link> */}
//                                         <Link style={location.pathname === '/' ? linkStyle : null} to='/'>HomePage</Link>

//                                         {/* <Nav.Link href="#Countries.js">Link</Nav.Link> */}
//                                         <Link style={location.pathname === '/about' ? linkStyle : null}
//                                             to='about' state={"send this message to about page"}>About</Link>
//                                         <NavDropdown
//                                             title="Dropdown"
//                                             id={`offcanvasNavbarDropdown-expand-${expand}`}
//                                         >
//                                             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                                             <NavDropdown.Item href="#action4">
//                                                 Another action
//                                             </NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item href="#action5">
//                                                 Something else here
//                                             </NavDropdown.Item>
//                                         </NavDropdown>
//                                     </Nav>
//                                     <Form className="d-flex">
//                                         <Form.Control
//                                             type="search"
//                                             placeholder="Search"
//                                             className="me-2"
//                                             aria-label="Search"
//                                         />
//                                         <Button variant="outline-success">Search</Button>
//                                     </Form>
//                                 </Offcanvas.Body>
//                             </Navbar.Offcanvas>
//                         </Container>
//                     </Navbar>
//                 ))
//             }
//         </>
//     );
// }

// export default OffcanvasExample;

import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function RegistrationForm() {
    return (
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">Register</Button>
        </Form>
    );
}

function LoginForm() {
    return (
        <Form className="d-flex">
            <Form.Control type="email" placeholder="Email" className="me-2" />
            <Form.Control type="password" placeholder="Password" className="me-2" />
            <Button variant="primary" >Login</Button>
        </Form>
    );
}

function OffcanvasExample() {
    const location = useLocation();
    const linkStyle = {
        color: "red",
        fontSize: "large"
    };

    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Link style={location.pathname === "/" ? linkStyle : null} to="/">
                            HomePage
                        </Link>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link style={location.pathname === "/" ? linkStyle : null} to="/">
                                        HomePage
                                    </Link>
                                    <Link
                                        style={location.pathname === "/about" ? linkStyle : null}
                                        to="about"
                                        state={"send this message to about page"}
                                    >
                                        About
                                    </Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <LoginForm />
                                <hr />
                                <RegistrationForm />
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;
