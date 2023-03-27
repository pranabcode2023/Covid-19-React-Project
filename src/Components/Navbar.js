// import React from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';


// function RegistrationForm() {
//     return (
//         <Form>
//             <Form.Group controlId="formBasicName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your name" />
//             </Form.Group>

//             <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//                 <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//             </Form.Group>

//             <Button variant="primary" type="submit">Register</Button>
//         </Form>
//     );
// }

// function LoginForm() {
//     return (
//         <Form className="d-flex">

//             <Form.Control type="email" placeholder="Email" className="me-2" />
//             <Form.Control type="password" placeholder="Password" className="me-2" />
//             <Button variant="primary" >Login</Button>
//         </Form>
//     );
// }

// function OffcanvasExample() {
//     const location = useLocation();
//     const linkStyle = {
//         color: "black",
//         fontSize: "25px",
//         textDecoration: "bold",
//     };

//     return (
//         <>
//             {[false].map((expand) => (
//                 <Navbar key={expand} bg="light" expand={expand} className="mb-3">
//                     <Container fluid>
//                         {/* <Link style={location.pathname === "/" ? linkStyle : null} to="/">
//                             HomePage
//                         </Link> */}
//                         <NavLink to='/' style={({ isActive }) => isActive ? linkStyle : null}>HomePage</NavLink>
//                         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                         <Navbar.Offcanvas
//                             id={`offcanvasNavbar-expand-${expand}`}
//                             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                             placement="end"
//                         >
//                             <Offcanvas.Header closeButton>
//                                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                                     Navigation
//                                 </Offcanvas.Title>
//                             </Offcanvas.Header>
//                             <Offcanvas.Body>
//                                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                                     {/* <Link style={location.pathname === "/" ? linkStyle : null} to="/">
//                                         HomePage
//                                     </Link> */}
//                                     <NavLink to='/' style={({ isActive }) => isActive ? linkStyle : null}>HomePage</NavLink>
//                                     {/* <Link
//                                         style={location.pathname === "/about" ? linkStyle : null}
//                                         to="about"
//                                         state={"send this message to about page"}
//                                     >
//                                         About
//                                     </Link> */}
//                                     <NavLink to='/about' style={({ isActive }) => isActive ? linkStyle : null}>About</NavLink>
//                                     {location.pathname.includes("about") ?
//                                         <>

//                                             <NavLink to='/About/Country' style={({ isActive }) => isActive ? linkStyle : null}>Covid-19 Data</NavLink>
//                                             <NavLink to='/About/PieChart' style={({ isActive }) => isActive ? linkStyle : null}>Covid-19 PieChart</NavLink>
//                                             <NavLink to='/About/Map' style={({ isActive }) => isActive ? linkStyle : null}>Covid-19 Vaccine Map</NavLink>
//                                         </>
//                                         : null}
//                                     <hr />
//                                     <NavDropdown
//                                         title="Show More"
//                                         id={`offcanvasNavbarDropdown-expand-${expand}`}>
//                                         {/* <NavLink to='/History' style={({ isActive }) => isActive ? linkStyle : null}>History</NavLink>
//                                         <NavLink to='/Usa' style={({ isActive }) => isActive ? linkStyle : null}>Usa</NavLink> */}
//                                         <NavDropdown.Divider />
//                                         {/* <NavLink to='/about' style={({ isActive }) => isActive ? linkStyle : null}>About</NavLink> */}
//                                     </NavDropdown>
//                                     <hr />
//                                 </Nav>
//                                 <hr />
//                                 <LoginForm />
//                                 <hr />
//                                 <RegistrationForm />
//                             </Offcanvas.Body>
//                         </Navbar.Offcanvas>
//                     </Container>
//                 </Navbar>
//             ))}
//         </>
//     );
// }

// export default OffcanvasExample;




import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function OffcanvasNavbar() {
    const location = useLocation();
    const linkStyle = {
        color: "black",
        fontSize: "25px",
        textDecoration: "bold",
    };

    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <NavLink to='/' style={({ isActive }) => isActive ? linkStyle : null}>HomePage</NavLink>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Navigation
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink to='/' style={({ isActive }) => isActive ? linkStyle : null}>HomePage</NavLink>
                                    <NavLink to='/about' style={({ isActive }) => isActive ? linkStyle : null}>About</NavLink>
                                    {location.pathname.includes("about") ?
                                        <>
                                            <NavLink to='/About/LoginForm' style={({ isActive }) => isActive ? linkStyle : null}>LoginForm</NavLink>
                                            <NavLink to='/About/Country' style={({ isActive }) => isActive ? linkStyle : null}>Covid-19 Data</NavLink>
                                            <NavLink to='/About/PieChart' style={({ isActive }) => isActive ? linkStyle : null}>Covid-19 PieChart</NavLink>
                                            <NavLink to='/About/Map' style={({ isActive }) => isActive ? linkStyle : null}>Covid-19 Vaccine Map</NavLink>
                                        </>
                                        : null}
                                    <hr />
                                    <NavDropdown
                                        title="Show More"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        {/* <NavLink to='/History' style={({ isActive }) => isActive ? linkStyle : null}>History</NavLink>
                                        <NavLink to='/Usa' style={({ isActive }) => isActive ? linkStyle : null}>Usa</NavLink> */}
                                        <NavDropdown.Divider />
                                        {/* <NavLink to='/about' style={({ isActive }) => isActive ? linkStyle : null}>About</NavLink> */}
                                    </NavDropdown>
                                    <hr />
                                </Nav>
                                {/* <img className="covid19_img" src="Images/covid19_img" alt="Covid-19" /> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasNavbar;

