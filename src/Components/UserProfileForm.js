import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserProfileForm = ({ setUserProfile, selectedCountry }) => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [conditions, setConditions] = useState('');
    const [medications, setMedications] = useState('');
    const [vaccinated, setVaccinated] = useState('');
    const [travel, setTravel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userProfile = {
            age,
            gender,
            conditions,
            medications,
            vaccinated,
            travel,
            country: selectedCountry.country,
            population: selectedCountry.population,
        };
        setUserProfile(userProfile);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicConditions">
                    <Form.Label>Health Conditions</Form.Label>
                    <Form.Control type="text" placeholder="Enter any health conditions you have" value={conditions} onChange={(e) =>
                        setConditions(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicMedications">
                    <Form.Label>Medications</Form.Label>
                    <Form.Control type="text" placeholder="Enter any medications you are taking" value={medications} onChange={(e) =>
                        setMedications(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicVaccinated">
                    <Form.Label>Vaccination Status</Form.Label>
                    <Form.Control as="select" value={vaccinated} onChange={(e) => setVaccinated(e.target.value)}>
                        <option value="">Select Vaccination Status</option>
                        <option value="fully-vaccinated">Fully Vaccinated</option>
                        <option value="partially-vaccinated">Partially Vaccinated</option>
                        <option value="not-vaccinated">Not Vaccinated</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicTravel">
                    <Form.Label>Recent Travel</Form.Label>
                    <Form.Control type="text" placeholder="Enter any recent travel information" value={travel} onChange={(e) =>
                        setTravel(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save Profile
                </Button>
            </Form>
        </div>
    );
};

export default UserProfileForm;

