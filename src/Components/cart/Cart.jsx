import { useState } from 'react';
import cart from '../../assets/images/Cart_2.png'
import './cart.css'
import SideBar from '../sidebar/SideBar';

const Cart = () => {
  const [sidebar,setSidebar] = useState(false)
  return (
    <div className="shop__imges d-flex justify-content-end">
      <div onClick={()=>setSidebar(true)} className="cart__imge w-50">
        <img className='img-fluid w-75' src={cart} alt="" />
      </div>
      <SideBar isOpen={sidebar} isClose={()=> setSidebar(false)}>

      </SideBar>
    </div>
  );
};

export default Cart;
