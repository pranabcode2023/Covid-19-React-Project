import React from 'react';

import Countries from '../Components/Countries';
import LoginForm from '../Components/LoginForm';

function Homepage() {


    return (
        <div>
            <p>Click on the links above to view information about different countries and symptoms</p>
            <Countries />
            <LoginForm />
        </div>
    );
}

export default Homepage;
