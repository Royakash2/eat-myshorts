// import t_shirt from '../../assets/Images/Layer_1.png'
import { Link } from "react-router-dom";
import Tshirt from "../../Components/Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main__screen">
      {/* <div className='d-flex justify-content-center align-items-center'>
            <div className='mt-5 me-5 pe-5'>
            <img className="img-fluid w-75" src={t_shirt} alt="" />
            </div>
        </div> */}
        <Link to='/product'><Tshirt/></Link>
        
      </div>
    </>
  );
};

export default Home;
