import React from 'react'

const LoginForm = () => {
    return (
        <div>

        </div>
    )
}

export default LoginForm






// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const LoginForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory();

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     // handle form submission
//     // };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // handle form submission here

//         // redirect to home page
//         history.push('/');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Username:</label>
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };
// export default LoginForm;