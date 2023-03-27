import React from 'react'
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

function App() {
  return (
    <>

      <div className="App">
        <div className="bg-image-wrapper">
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='*' element={<Error404 />} />
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='/About' element={<About />} >
              <Route path='LoginForm' element={< LoginForm />} />
              <Route path='PieChart' element={< PieChart />} />
              <Route path='Map' element={< Map />} />
              <Route Route path='Country' element={<Country />} />
              {/* <Route path='UserProfileForm' element={<UserProfileForm />} /> */}
              {/* </Route> */}



            </Route>


            <Route path='/countries' element={<Countries />} />

          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
