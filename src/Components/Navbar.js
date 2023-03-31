import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../contexts/AuthContext';



function OffcanvasNavbar() {

    const { user, logOut, createNewUser, logIn } = useContext(AuthContext);
    const location = useLocation();
    const linkStyle = {
        color: "darkblue",
        fontSize: "25px",
        textDecoration: "bold",
    };

    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="secondary" expand={expand} >
                    <Container fluid>
                        <NavLink to='/' style={linkStyle}>Home page</NavLink>
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
                                <Nav >
                                    <hr />
                                    {!user ? <NavLink to='/login' style={({ isActive }) => isActive ? linkStyle : null}>Log in</NavLink> :
                                        <p style={{ cursor: "pointer" }} onClick={logOut}>Logout</p>}
                                    <hr />
                                    <NavLink to='/' style={({ isActive }) => isActive ? linkStyle : null}>HomePage</NavLink>
                                    <hr />
                                    <NavLink to='/about' style={({ isActive }) => isActive ? linkStyle : null}>About</NavLink>

                                    <hr />
                                    {location.pathname.includes("about") ?
                                        <>
                                            {/* <NavLink to='/About/LoginForm' style={({ isActive }) => isActive ? linkStyle : null}>LoginForm</NavLink> */}
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







// *************************** From Spike**************************



// import React, { useContext } from 'react'
// import { Link, NavLink, useLocation } from 'react-router-dom'
// import { AuthContext } from '../contexts/AuthContext';

// function NavBar({ demoUser, setDemoUser }) {
//     const location = useLocation();
//     const { user, logOut } = useContext(AuthContext);
//     const linkStyle = {
//         color: "red",
//         fontSize: "large"
//     }

//     return (
//         <div>
//             {/* <div style={{ display: "flex", gap: "1em" }}>
//         <Link style={location.pathname === '/' ? linkStyle : null} to='/'>HomePage</Link>
//         <Link style={location.pathname === '/about' ? linkStyle : null} to='about' state={ "send this message to about page" }>About</Link>
//       </div> */}

//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
//                     <NavLink to='/' style={({ isActive }) => isActive ? linkStyle : null}>HomePage</NavLink>
//                     <NavLink to='/about' style={({ isActive }) => isActive ? linkStyle : null}>About</NavLink>
//                     {location.pathname.includes("about") ?
//                         <>
//                             -
//                             <NavLink to='/about/dev' style={({ isActive }) => isActive ? linkStyle : null}>Dev</NavLink>
//                             <NavLink to='/about/content' style={({ isActive }) => isActive ? linkStyle : null}>Content</NavLink>
//                         </>
//                         : null}
//                 </div>
//                 {!user ? <NavLink to='/login' style={({ isActive }) => isActive ? linkStyle : null}>Log in!</NavLink> : <p style={{ cursor: "pointer" }} onClick={logOut}>Logout</p>}
//             </div>
//         </div>
//     )
// }

// export default NavBar

