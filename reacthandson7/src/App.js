import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = '/home' element = {< Home />} />
        <Route path = '/student' element = {< Student />} />
        <Route path = '/contact' element = {< Contact />} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
