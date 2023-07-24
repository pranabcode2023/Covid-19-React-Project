import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; // import useNavigate

function LoginForm({ functionType }) {
  const { createNewUser, logIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // initialize navigate

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (functionType === "register") {
      createNewUser(email, password);
      setEmail("");
      setPassword("");
    }
    if (functionType === "login") {
      logIn(email, password);
      setEmail("");
      setPassword("");
      navigate("/about"); // redirect to the About page
    }
  };

  return (
    <div className="registerLoginContainer">
      {functionType === "register" && (
        <form className="formContainer" onSubmit={handleSubmit}>
          <h1>Register</h1>

          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />

          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Register</button>

          <p>Already Registered? Go for log in</p>
        </form>
      )}
      {functionType === "login" && (
        <form className="formContainer" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />

          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Login</button>

          <p>No Account ? Go for Register</p>
        </form>
      )}
    </div>
  );
}

export default LoginForm;





//   ****************Form spike**********************




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

