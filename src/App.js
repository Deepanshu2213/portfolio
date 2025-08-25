import './App.css';
import Navigation from './Components/Navigation';
import Introduction from './Data-display/Introduction';
import AboutMe from './Data-display/About';
import Skills from './Data-display/Skills';
import Experience from './Data-display/Experience';
import Resize from './Context/resize';
import Project from './Data-display/Project';
import Contact from './Data-display/Contact';
function App() {
  return (
    <Resize>
      <div className="App min-h-screen text-gray-300">
        <Navigation id="nav" />
        <Introduction id="intro" />
        <AboutMe id="about" />
        <Skills id="skills" />
        <Experience id="experience" />
        <Project id="project" />
        <Contact id="contract" />
      </div>
    </Resize>
  );
}

export default App;
