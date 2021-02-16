import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
  params={{
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 900
        }
      },
      shape: {
        type: "circle",
        stroke: {
          width:2,
          color: "#734f96"
        }
      }
    }
  }}
    />
    <Navbar />
    <Header />
    <AboutMe />
    <Services />
    <Experience />
    <Portfolio />
    <Testimonials />
    </>
  );
}

export default App;
