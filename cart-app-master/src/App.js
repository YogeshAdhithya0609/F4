import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { Route , Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className='container'>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='cart' element={<Cart/>} />
            </Routes>
        </div>
    );
};

export default App;