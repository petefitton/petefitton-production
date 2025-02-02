import './App.css';
import HomePage from './Pages/HomePage';
import MusicPage from './Pages/MusicPage';
import AlbumPage from './Pages/AlbumPage';
// import StorePage from './Pages/StorePage';
import AboutPage from './Pages/AboutPage';
import Footer from './Pages/Footer';
import NoPage from './Pages/NoPage';
import Navbar from './Pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route index element={<HomePage />} />
            <Route path="music/:album" element={<AlbumPage />} />
            <Route path="music" element={<MusicPage />} />
            {/* <Route path="store" element={<StorePage />} /> */}
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
