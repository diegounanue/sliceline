import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Menu from './components/menu/menu';
import FoodDialog from './components/foodDialog/foodDialog';
import Order from './components/order/order';
import useOpenFood from './hooks/useFood';
import useOrders from './hooks/useOrders';
import useTitle from './hooks/useTitle';

function App() {
  // HOOKS: these hooks are initialized when APP is created so they are shared across application
  const openFood = useOpenFood();
  // const { openFood, setOpenFood} = useFood; and then use it as properties like openFood={openFood}, is equal to just {...useFood}
  const orders = useOrders();

  useTitle({...openFood, ...orders});


  return (
    <div className="App">
      {/* send the hook (state) as a property */}
      <FoodDialog {...openFood} {...orders} />
      <Order {...orders} {...openFood} />
      <Navbar />
      <Banner />
      <div className="appContainer">
        <Menu {...openFood} />
      </div>
    </div>
  );
}

export default App;
