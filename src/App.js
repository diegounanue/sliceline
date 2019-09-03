import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Menu from './components/menu/menu';
import FoodDialog from './components/foodDialog/foodDialog';

function App() {

  const [openFood, setOpenFood] = useState();

  return (
    <div className="App">
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <div className="appContainer">
        <Menu setOpenFood={setOpenFood} />
      </div>
    </div>
  );
}

export default App;
