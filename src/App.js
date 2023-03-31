import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Error404 from './Pages/Error404'
import Navbar from './Components/Navbar'
import Countries from './Components/Countries'
import Country from './Components/Country'
import PieChart from './Components/PieChart'
import Map from './Components/Map'
import './App.css';
import LoginForm from './Components/LoginForm'
import UserProfileForm from './Components/UserProfileForm'
import { AuthContextProvider } from './contexts/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'
import Login from './Pages/Login'


function App() {
  const [demoUser, setDemoUser] = useState({ email: "demo@email.com", username: "Demoman" });
  return (
    <>

      <div className="App">
        <div className="bg-image-wrapper">

          <AuthContextProvider>
            <Navbar demoUser={demoUser} setDemoUser={setDemoUser} />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='*' element={<Error404 />} />

              <Route path='/About' element={<ProtectedRoute><About /></ProtectedRoute>} >

                <Route path='PieChart' element={< PieChart />} />
                <Route path='Map' element={< Map />} />
                <Route path='Country' element={<Country />} />

              </Route>
              <Route path='/countries' element={<Countries />} />


              <Route path='login' element={<Login />} />


            </Routes>
          </AuthContextProvider>

        </div>
      </div>
    </>
  );
}

export default App;




// import React, { useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Homepage from './pages/Homepage'
// import About from './pages/About'
// import Error404 from './pages/Error404'
// import NavBar from './components/NavBar'
// import Dev from './pages/Dev'
// import Content from './pages/Content'
// import CharDetails from './pages/CharDetails'
// import { AuthContextProvider } from './contexts/AuthContext'
// import ProtectedRoute from './components/ProtectedRoute'
// import Login from './pages/Login'

// function App() {
//   const [demoUser, setDemoUser] = useState({ email: "demo@email.com", username: "Demoman" });
//   return (
//     <>
//       <AuthContextProvider>
//         <NavBar demoUser={demoUser} setDemoUser={setDemoUser} />
//         <Routes>

//           <Route path='/' element={<Homepage />} />

//           <Route path='*' element={<Error404 />} />

//           <Route path='/about' element={<About />} >

//             <Route path='dev' element={<Dev />} />
//             <Route path='content' element={<Content />} />

//           </Route>

//           <Route path='details/:id/:name' element={<ProtectedRoute><CharDetails /></ProtectedRoute>} />

//           <Route path='login' element={<Login />} />

//         </Routes>
//       </AuthContextProvider>
//     </>
//   );
// }

// export default App;
