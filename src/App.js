import './App.css';
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Journey from './components/Journey';

function App() {
  return (
    <div className='bg-iDarkBlue'>
      <NavBar />
      <Home />
      <Journey />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
