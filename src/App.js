import './App.css';
 import SignUp from './components/signup';
import LogIn from './components/login'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () =>  {
  return (
    <>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter> 
    </>


  );
}

export default App;
