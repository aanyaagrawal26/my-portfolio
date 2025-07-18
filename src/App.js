
// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden bg-slate-100 font-['Poppins']">
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-pink-100 via-blue-100 to-violet-200 opacity-90" />
        <div className="absolute inset-0 -z-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
