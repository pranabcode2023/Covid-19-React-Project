// ********************html Form***************************

import { useContext, useState, } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { collection, addDoc, } from "firebase/firestore";
import { db } from '../Pages/FbConfig';
import { useNavigate } from 'react-router-dom';

const UserProfileForm = ({ country, onSubmit, onRefresh, onDelete }) => {
    const { user } = useContext(AuthContext)
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [conditions, setConditions] = useState('');
    const [medications, setMedications] = useState('');
    const [vaccinated, setVaccinated] = useState('');
    const [travel, setTravel] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

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
            doctor: user.email,
        };
        onSubmit(patientInfo);
        try {
            const docRef = await addDoc(collection(db, "cases"), patientInfo);
            console.log("Document written with ID: ", docRef.id);
            navigate("/About/Covid19Cases"); // Redirect to the covid19Cases page
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
                <select id="options" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label conditions="conditions">Existing Health Conditions:</label>
                <textarea id="textarea" value={conditions} onChange={(e) => setConditions(e.target.value)} />
            </div>
            <div>
                <label>Medications:</label>
                <textarea id="textarea" value={medications} onChange={(e) => setMedications(e.target.value)} />
            </div>
            <div>
                <label>Vaccination Status:</label>
                <select id="options" value={vaccinated} onChange={(e) => setVaccinated(e.target.value)}>
                    <option value=""></option>
                    <option value="fully vaccinated">Fully Vaccinated</option>
                    <option value="partially vaccinated">Partially Vaccinated</option>
                    <option value="not vaccinated">Not Vaccinated</option>
                </select>
            </div>
            <div>
                <label>Recent Travel:</label>
                <textarea id="textarea" value={travel} onChange={(e) => setTravel(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
            <button onClick={handleRefresh}>Refresh</button>
            <button onClick={handleDelete}>Delete Profile</button>
        </form>



    );
};

export default UserProfileForm;


