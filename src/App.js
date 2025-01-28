import './App.css';
import HomePage from './Pages/HomePage';
import MusicPage from './Pages/MusicPage';
import StorePage from './Pages/StorePage';
import MiscPage from './Pages/MiscPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import NoPage from './Pages/NoPage';
import Navbar from './Pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/petefitton-production">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="music" element={<MusicPage />} />
          {/* <Route path="store" element={<StorePage />} /> */}
          {/* <Route path="misc" element={<MiscPage />} /> */}
          {/* <Route path="about" element={<AboutPage />} /> */}
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
