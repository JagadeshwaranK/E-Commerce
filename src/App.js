import './App.css';
// import SignUp from './components/signup';
import LogIn from './components/login'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';



const App = () =>  {
  return (
    <>
      {/* <SignUp/><br></br> */}
      <BrowserRouter>
      <LogIn/>
      </BrowserRouter>
    </>


  );
}

export default App;
