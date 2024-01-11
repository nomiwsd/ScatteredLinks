import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import ContactUs from "./Components/ContactUsPage/ContactUs";
import Projects from "./Components/ProjectsPage/Projects";
import Home from "./Components/Homepage";
import Footer from "./Components/Footer/Footer";
import About from "./Components/AboutPage/About";
import Development from "./Components/ServicesPage/Development";
import BPOsection from "./Components/ServicesPage/BPOsection";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
       <Router>
    <Header/>
      <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/Development" element={<Development />} />
      <Route path="/BPO" element={<BPOsection />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
