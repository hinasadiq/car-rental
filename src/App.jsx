import React from 'react';
import Navbar from './Components/Navbar';
import ErrorBoundary from './Components/ErrorBoundary';
 import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CarDetails from './Pages/CarDetails';
import Cars from './Pages/Cars';
import MyBookings from './Pages/MyBookings';
const App = () => {
  return (
    <ErrorBoundary>
      <Navbar />
      <Routes>
       <Route  path='/' element={<Home/>}/>
       <Route  path='/car-details/:id' element={<CarDetails />}/>
       <Route  path='/cars' element={<Cars />}/>
       {/* <Route  path='/MyBookings' element={<MyBookings />}/> */}
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
