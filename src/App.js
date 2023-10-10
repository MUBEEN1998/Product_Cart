// import Purchase from './components/Purchase';
// import Cart from './components/Cart';
// import Total from './components/Total';
// import Login from './components/Login';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
//eslint-disable-next-line
function App() {
  return (
    <div className="App">
        <Navbar/>  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      
    </div>
  );
}

export default App;