import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      Hello Sliceline!
    </div>
  );
}

export default App;
