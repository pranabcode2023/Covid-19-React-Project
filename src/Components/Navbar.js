// import React, { useContext } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { AuthContext } from '../contexts/AuthContext';

// function LoginForm() {
//     const { user, logOut, createNewUser, logIn } = useContext(AuthContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (functionType === "register") {
//             createNewUser(email, password);
//             setEmail('');
//             setPassword('');
//         }
//         if (functionType === "login") {
//             logIn(email, password);
//             setEmail('');
//             setPassword('');
//         }
//     }

//     return (
//         <div className="login-form">
//             {functionType === "register" && (
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         Email:
//                         <input className='loginInput' placeholder='email' value={email} onChange={handleEmailChange} type='email' />
//                     </label>
//                     <label>
//                         Password:
//                         <input className='loginInput' type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
//                     </label>
//                     <button className="loginInput" type="submit">Registration</button>
//                     <p>Already Registered? Go for log in</p>
//                 </form>
//             )}
//             {functionType === "login" && (
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         Email:
//                         <input className='loginInput' placeholder='email' value={email} onChange={handleEmailChange} type='email' />
//                     </label>
//                     <label>
//                         Password:
//                         <input className='loginInput' type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
//                     </label>
//                     <button className="login-button" type="submit">Log in</button>
//                     <div className="forgot-password">
//                         <a href="#">Forgot password?</a>
//                     </div>
//                     <div className="social-login">
//                         <p>Or login with:</p>
//                         <div className="social-buttons">
//                             <button className="Gmail-button" type="button">Gmail</button>
//                             <button className="facebook-button" type="button">Facebook</button>
//                             <button className="github-button" type="button">Github</button>
//                         </div>
//                     </div>

//                 </form>
//             )}

//         </div>
//     );
// }

// function OffcanvasExample() {
//     const { user, logOut, createNewUser, logIn } = useContext(AuthContext);
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
//                         {!user ? <NavLink to='/login' style={({ isActive }) => isActive ? linkStyle : null}>Log in!</NavLink> : <p style={{ cursor: "pointer" }} onClick={logOut}>Logout</p>}
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

//                             </Offcanvas.Body>
//                         </Navbar.Offcanvas>
//                     </Container>
//                 </Navbar>
//             ))}
//         </>
//     );
// }

// export default OffcanvasExample;


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
        color: "black",
        fontSize: "25px",
        textDecoration: "bold",
    };

    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <NavLink to='/' style={({ isActive }) => isActive ? linkStyle : null}>Home page</NavLink>
                        {!user ? <NavLink to='/login' style={({ isActive }) => isActive ? linkStyle : null}>Log in!</NavLink> : <p style={{ cursor: "pointer" }} onClick={logOut}>Logout</p>}
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

