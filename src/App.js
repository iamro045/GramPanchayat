import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import AdminUpload from "./Pages/AdminUpload";
import Schemes from './Pages/Schemes';
import Notices from './Pages/Notices';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-upload" element={<AdminUpload />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
