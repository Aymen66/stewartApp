import './App.css';
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";

import Home from "./components/Home"
import Testimonials from "./components/Testimonials"
import Blog from './components/Blog';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
  <HashRouter>
    <Routes>
    <Route  path="/" element={<NavBar/>}>
    <Route index element={<Home />} />

    <Route path="Testimonials" element={<Testimonials />} />
    <Route path="Blog" element={<Blog />} />
    <Route path="Contact" element={<Contact />} />



    </Route>

    </Routes>
  </HashRouter>
        </div>
  );
}

export default App;
