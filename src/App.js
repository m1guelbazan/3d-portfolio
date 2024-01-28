import { Route, Routes } from 'react-router-dom';


import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Projects from './pages/Projects';




function App() {
  return (
    <>
    <Navbar/>
      <div className="App">
        <Routes>        
          <Route path="/"  element={<LandingPage/>} />
          <Route path="/about"  element={<About/>}/>
          <Route path="/projects"  element={<Projects/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
