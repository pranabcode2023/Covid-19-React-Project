
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


import React from 'react';

function LoginForm() {
    return (
        <div className="login-form">
            {/* <img className="background-image" src="/Images/Covid-19.jpg" alt="Covid-19" /> */}
            {/* <img className="covid19_img" src="Images/covid19_img" alt="Covid-19" /> */}
            <h2>Login</h2>
            <form>
                <label>
                    Email:
                    <input className='loginInput' type="email" name="email" />
                </label>
                <label>
                    Password:
                    <input className='loginInput' type="password" name="password" />
                </label>
                <button className="login-button" type="submit">Log in</button>
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
        </div>
    );
}

export default LoginForm;

