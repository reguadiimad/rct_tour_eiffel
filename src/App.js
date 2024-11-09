// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import '@fontsource/inter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // import individual icons


library.add(faCoffee);
function App() {
  return (
  <div>
      <Router >
     
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Navbar />
    </Router>
  </div>
  );
}

export default App;
