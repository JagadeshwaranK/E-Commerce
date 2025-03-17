// App.js
import React from 'react';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/signup';
import LogIn from './components/login'; 
import Home from './components/home';
import Rifle from './components/Rifle';
import Handgun from './components/Handgun';
import Tactical from './components/Tactical';
import Revolver from './components/Revolver';
import Shotgun from './components/Shotgun';
import Specialty from './components/Specialty';
import Training from './components/Training';
import SignUp from './components/signup';
import LogIn from './components/login';
import Home from './components/home';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Handgun" element={<Handgun />} />
          <Route path="/Rifle" element={<Rifle />} />
          <Route path="/Shotgun" element={<Shotgun />} />
          <Route path="/Specialty" element={<Specialty />} />
          <Route path="/Revolver" element={<Revolver />} />
          <Route path="/Tactical" element={<Tactical />} />
          <Route path="/Training" element={<Training />} />
        </Routes>
        </BrowserRouter>    
  );
};

export default App;

