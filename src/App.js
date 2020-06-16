import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar-component';
import Banner from './banner-component';
import Footer from './footer-component';
import Thumbnail from './thumbnail-component'

const THUMBNAILS_DATA = ['Thumb 1', 'Thumb 2', 'Thumb 3', 'Thumb 4', 'Thumb 5', 'Thumb 6', 'Thumb 7', 'Thumb 8']

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100vh', padding: 0 }}>
      {/* navbar */}
      <Navbar />
      {/* banner */}
      <Banner />
      {/* thumbnails */}
      <div style={{ display: 'flex', width: '100%', height: '50vh', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'space-evenly' }}>
        {
          THUMBNAILS_DATA.map((thumb) => {
          return <Thumbnail name={thumb} />
        })
        }
      </div>

      {/* footer */}
      <Footer />

    </div>
  );
}

export default App;