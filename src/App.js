<<<<<<< HEAD
// import './App.css';
// // import SignUp from './components/signup';
// // import LogIn from './components/login'; 
// import Shirts from './components/Shirt';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from 'react-router-dom';



// const App = () =>  {
//   return (
//     <>
//       {/* <SignUp/><br></br> */}
//       {/* <BrowserRouter>
//       <LogIn/>
//       </BrowserRouter> */}

//     </>


//   );
// }

// export default App;



// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Rifle from './components/Rifle';
import Handgun from './components/Handgun';
import Tactical from './components/Tactical';
import Revolver from './components/Revolver';
import Shotgun from './components/Shotgun';
import Specialty from './components/Specialty';
import Training from './components/Training';
=======
import './App.css';
 import SignUp from './components/signup';
import LogIn from './components/login'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> f92a0b57af097c56c22605ac16faf61c6d8697ad

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* <Link className="navbar-brand" to="/">Ammunition store </Link> */}
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <Link className="nav-link" to="/Handgun">Handgun</Link>
              <Link className="nav-link" to="/Rifle">Rifle</Link>
              <Link className="nav-link" to="/Shotgun">Shotgun</Link>
              <Link className="nav-link" to="/Specialty">Specialty</Link>
              <Link className="nav-link" to="/Revolver">Revolver</Link>
              <Link className="nav-link" to="/Tactical">Tactical</Link>
              <Link className="nav-link" to="/Training">Training</Link>
            </div>
          </div>
        </div>
      </nav>
=======
    <>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter> 
    </>

>>>>>>> f92a0b57af097c56c22605ac16faf61c6d8697ad

      <div className="container mt-4">
        <Routes>
          <Route path="/Handgun" element={<Handgun />} />
          <Route path="/Rifle" element={<Rifle />} />
          <Route path="/Shotgun" element={<Shotgun />} />
          <Route path="/Specialty" element={<Specialty />} />
          <Route path="/Revolver" element={<Revolver />} />
          <Route path="/Tactical" element={<Tactical />} />
          <Route path="/Training" element={<Training />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
