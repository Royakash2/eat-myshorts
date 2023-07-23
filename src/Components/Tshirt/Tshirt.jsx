import t_shirt from "../../assets/Images/Layer_1.png";
import "./Tshirt.css";

const Tshirt = () => {
  return (
    <div className="t-shirt-container">
      <img className="w-75" src={t_shirt} alt="" />
    </div>
  );
};

export default Tshirt;
