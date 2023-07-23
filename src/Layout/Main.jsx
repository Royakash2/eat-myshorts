import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Menu from '../Components/Menu/Menu';
import Cart from '../Components/cart/Cart';


const Main = () => {
    return (
        <div >
            <Cart></Cart>
            <Menu></Menu>
            <Outlet/>
            
            
            

        </div>
    );
};

export default Main;