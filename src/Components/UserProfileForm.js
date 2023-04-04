
// ********************Bootstrap Form************************

// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const UserProfileForm = ({ setUserProfile, selectedCountry }) => {
//     const [age, setAge] = useState('');
//     const [gender, setGender] = useState('');
//     const [conditions, setConditions] = useState('');
//     const [medications, setMedications] = useState('');
//     const [vaccinated, setVaccinated] = useState('');
//     const [travel, setTravel] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const userProfile = {
//             age,
//             gender,
//             conditions,
//             medications,
//             vaccinated,
//             travel,
//             country: selectedCountry.country,
//             population: selectedCountry.population,
//         };
//         setUserProfile(userProfile);
//     };



//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formBasicAge">
//                     <Form.Label>Age</Form.Label>
//                     <Form.Control type="text" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicGender">
//                     <Form.Label>Gender</Form.Label>
//                     <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </Form.Control>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicConditions">
//                     <Form.Label>Health Conditions</Form.Label>
//                     <Form.Control type="text" placeholder="Enter any health conditions you have" value={conditions} onChange={(e) =>
//                         setConditions(e.target.value)} />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicMedications">
//                     <Form.Label>Medications</Form.Label>
//                     <Form.Control type="text" placeholder="Enter any medications you are taking" value={medications} onChange={(e) =>
//                         setMedications(e.target.value)} />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicVaccinated">
//                     <Form.Label>Vaccination Status</Form.Label>
//                     <Form.Control as="select" value={vaccinated} onChange={(e) => setVaccinated(e.target.value)}>
//                         <option value="">Select Vaccination Status</option>
//                         <option value="fully-vaccinated">Fully Vaccinated</option>
//                         <option value="partially-vaccinated">Partially Vaccinated</option>
//                         <option value="not-vaccinated">Not Vaccinated</option>
//                     </Form.Control>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicTravel">
//                     <Form.Label>Recent Travel</Form.Label>
//                     <Form.Control type="text" placeholder="Enter any recent travel information" value={travel} onChange={(e) =>
//                         setTravel(e.target.value)} />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                     Save Profile
//                 </Button>
//             </Form>
//         </div>
//     );
// };

// export default UserProfileForm;



// ********************html Form***************************

import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../fbConfig';




const UserProfileForm = ({ country, onSubmit, onRefresh, onDelete }) => {
    const { user } = useContext(AuthContext)
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [conditions, setConditions] = useState('');
    const [medications, setMedications] = useState('');
    const [vaccinated, setVaccinated] = useState('');
    const [travel, setTravel] = useState('');
    const [name, setName] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        const patientInfo = {
            age,
            gender,
            conditions,
            medications,
            vaccinated,
            travel,
            nationality: country.country,
            name,
            doctor: user.email
        }
        onSubmit(patientInfo);
        try {
            const docRef = await addDoc(collection(db, "cases"), patientInfo);

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }


    };

    const handleRefresh = (e) => {
        e.preventDefault()
        setAge('');
        setGender('');
        setConditions('');
        setMedications('');
        setVaccinated('');
        setTravel('');
        setName('');
        // if (typeof onRefresh === 'function') {
        //     onRefresh();
        // }
    };

    const handleDelete = (e) => {
        e.preventDefault()
        setAge('');
        setGender('');
        setConditions('');
        setMedications('');
        setVaccinated('');
        setTravel('');
        setName('');
        // if (typeof onDelete === 'function') {
        //     onDelete();
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{country.country} :
                <hr />
                Add Covid-19 Case</h3>
            <div>
                <label>Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Age:</label>
                <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>Gender:</label>
                <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label conditions="conditions">Existing Health Conditions:</label>
                <textarea id="conditions" value={conditions} onChange={(e) => setConditions(e.target.value)} />
            </div>
            <div>
                <label>Medications:</label>
                <textarea id="medications" value={medications} onChange={(e) => setMedications(e.target.value)} />
            </div>
            <div>
                <label>Vaccination Status:</label>
                <select id="vaccinated" value={vaccinated} onChange={(e) => setVaccinated(e.target.value)}>
                    <option value=""></option>
                    <option value="fully vaccinated">Fully Vaccinated</option>
                    <option value="partially vaccinated">Partially Vaccinated</option>
                    <option value="not vaccinated">Not Vaccinated</option>
                </select>
            </div>
            <div>
                <label>Recent Travel:</label>
                <textarea id="travel" value={travel} onChange={(e) => setTravel(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
            <button onClick={handleRefresh}>Refresh</button>
            <button onClick={handleDelete}>Delete Profile</button>
        </form>
    );
};

export default UserProfileForm;
