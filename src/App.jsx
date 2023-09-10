// App.js

import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
<Router>
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/projects" element={<Projects />} />

</Routes>
</Router>

  );
};

export default App;
