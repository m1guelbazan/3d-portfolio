import { Route, Routes } from 'react-router-dom';


import './App.css';

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className="App">
        <Routes>        
          <Route path="/"  element={<LandingPage/>} />
          <Route path="/about"  element={<About/>}/>
          <Route path="/projects"  element={<Projects/>}/>
          <Route path="/contact"  element={<Contact/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
