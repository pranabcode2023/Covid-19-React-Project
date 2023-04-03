
// import React from 'react';


// function LoginForm() {
//     return (
//         <div className="login-form">
//             <img className="background-image" src="Images/Covid-19.jpg" alt="Covid-19" />
//             <h2>Login</h2>
//             <form>
//                 <label>
//                     Email:
//                     <input type="email" name="email" />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" name="password" />
//                 </label>
//                 <div className="forgot-password">
//                     <a href="#">Forgot password?</a>
//                 </div>
//                 <div className="social-login">
//                     <p>Or login with:</p>
//                     <div className="social-buttons">
//                         <button className="google-button" type="button">Google</button>
//                         <button className="facebook-button" type="button">Facebook</button>
//                         <button className="github-button" type="button">Github</button>
//                     </div>
//                 </div>
//                 <button className="login-button" type="submit">Log in</button>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;



import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginForm({ functionType }) { // using destructuring to extract functionType from props
    const { user, logOut, createNewUser, logIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const navigateToAbout = () => {
        // 👇️ navigate to /About
        navigate('/About');
    };


    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (functionType === "register") {
            createNewUser(email, password);
            setEmail('');
            setPassword('');
        }
        if (functionType === "login") {
            logIn(email, password);
            setEmail('');
            setPassword('');
        }
    }

    return (
        <div className="login-form">
            {functionType === "register" && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input className='loginInput' placeholder='email' value={email} onChange={handleEmailChange} type='email' />
                    </label>
                    <label>
                        Password:
                        <input className='loginInput' type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <button className="loginInput" type="submit">Registration</button>
                    <p>Already Registered? Go for log in</p>
                </form>
            )}
            {functionType === "login" && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input className='loginInput' placeholder='email' value={email} onChange={handleEmailChange} type='email' />
                    </label>
                    <label>
                        Password:
                        <input className='loginInput' type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <button className="login-button" type="submit" >Log in</button>
                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>
                    <div className="social-login">
                        <p>Or login with:</p>
                        <div className="social-buttons">
                            <button className="Gmail-button" type="button">Gmail</button>
                            <button className="facebook-button" type="button">Facebook</button>
                            <button className="github-button" type="button">Github</button>
                        </div>
                    </div>

                </form>
            )}

        </div>
    );
}

export default LoginForm;



// import React, { useContext, useState } from 'react'
// import { AuthContext } from '../contexts/AuthContext';

// function LogForm({ functionType }) {
//     const { createNewUser, logIn } = useContext(AuthContext);
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
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1em", alignItems: "flex-start" }}>
//             <input placeholder='email' value={email} onChange={handleEmailChange} type='email' />
//             <input type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }

// export default LogForm

