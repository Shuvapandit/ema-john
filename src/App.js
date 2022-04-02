
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';

import Shop from './components/Shop/Shop';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      {/* 3 import routes */}
      <Routes>
        <Route path='/' element={<Shop></Shop>} ></Route>
        <Route path='/shop' element={<Shop></Shop>} ></Route>
        <Route path='/order' element={<Orders></Orders>} ></Route>
        <Route path='/inventory' element={<Inventory></Inventory>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
      </Routes>
    
      
    </div>
  );
}

export default App;
