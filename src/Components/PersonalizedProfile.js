const PersonalizedProfile = ({ country, userProfile }) => {

    if (!country) {
        return null;
    }
    // Use userProfile and other data to create a personalized disease profile

    // console.log(country);
    console.log(userProfile);



    return (
        <div>
            {/* <h1>Personalized Disease Profile</h1>
                <h3>{country.country}</h3>
                 <p>Total Cases: {country.cases}</p>
                <p>Total Deaths: {country.deaths}</p>
                <p>Total Recovered: {country.recovered}</p> */}
            {userProfile && (
                <>
                    <p>Name: {userProfile.name}</p>
                    <p>Age: {userProfile.age}</p>
                    <p>Gender: {userProfile.gender}</p>
                    <p>Existing Health Conditions: {userProfile.conditions}</p>
                    <p>Medications: {userProfile.medications}</p>
                    <p>Vaccination Status: {userProfile.vaccinated}</p>
                    <p>Recent Travel: {userProfile.travel}</p>
                </>
            )}
        </div>
    );
};
export default PersonalizedProfile;