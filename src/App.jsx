import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarContainer from './containers/NavbarContainer';

// Placeholder components for routes
const Home = () => <div>Home</div>;
const Education = () => <div>Education</div>;
const Experience = () => <div>Experience</div>;
const Projects = () => <div>Projects</div>;
const ContactMe = () => <div>Contact Me</div>;

const App = () => {
  return (
    <Router>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
};

export default App;
