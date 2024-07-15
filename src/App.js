import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoSection from './VideoSection';
import VideoGallery from './VideoGallery/VideoGallery';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VideoSection />} />
          <Route path="/videos" element={<VideoGallery/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;