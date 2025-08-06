import './App.css';
import Navigation from './Components/Navigation';
import Introduction from './Data-display/Introduction';
import AboutMe from './Data-display/About';
import Skills from './Data-display/Skills';
function App() {
  return (
    <div className="App min-h-screen text-gray-300">
      <Navigation/>
      <Introduction/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}

export default App;
