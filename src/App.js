import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Menu />
    </div>
  );
}

export default App;
