import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home'
import About from './containers/about';
import Skill from './containers/skills';
import Projects from './containers/projects';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Navbar from './components/navBar';
import Particles from "react-tsparticles";
import options from './utils/particle';
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";


function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded} 
        options={options}
      />
      <Navbar />
      <div className="App__main-page-content">
        <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
