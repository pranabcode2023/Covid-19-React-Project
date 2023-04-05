// import { db } from '../fbConfig';
// import { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';

// const RedAlert = () => {
//     const [favorites, setFavorites] = useState([]);

//     const handleDeleteFavorite = (id) => {
//         db.collection('favorites').doc(id).delete()
//             .then(() => {
//                 console.log('Document successfully deleted!');
//             })
//             .catch((error) => {
//                 console.error('Error removing document: ', error);
//             });

//         setFavorites(favorites.filter((favorite) => favorite.id !== id));
//     };

//     useEffect(() => {
//         // Get favorites data from Firestore
//         const unsubscribe = db.collection('favorites')
//             .onSnapshot((querySnapshot) => {
//                 const data = [];
//                 querySnapshot.forEach((doc) => {
//                     data.push({ id: doc.id, ...doc.data() });
//                 });
//                 setFavorites(data);
//             });

//         return () => unsubscribe();
//     }, []);

//     return (
//         <div className="container">
//             {favorites && favorites.map((favorite) => (
//                 <div className="col-md-4" key={favorite.id}>
//                     <div className="card">
//                         <img src={favorite.flag} alt="" className="card-img-top" />
//                         <div className="card-body">
//                             <h5 className="card-title">{favorite.countryName}</h5>
//                             <p className="card-text">Added on: {favorite.addedAt.toDate().toLocaleDateString()}</p>
//                             <Button variant="danger" onClick={() => handleDeleteFavorite(favorite.id)}>Delete Favorite</Button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };
// export default RedAlert;
// import React from 'react'


// const RedAlert = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default RedAlert



import React from 'react';

const RedAlert = () => {
    return (
        <div className="card">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="http://localhost:3000/" className="btn btn-primary">HomePage</a>
            </div>
        </div>
    );
};

export default RedAlert;