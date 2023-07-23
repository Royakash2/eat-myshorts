import "./Checkout.css";
import checkOutAvatar from "../../assets/Images/PNG-image.png";

const CheckOut = () => {
  return (
    <div className="checkout-screen pt-5 ps-5">
      {/* <div className="">
          <div className="h-100">
            <h1 className="fs-1 fs-sm-2">
              Thanks for your order! <br /> Will be Shipped In the next two dAys
            </h1>
            <h1 className="fs-2 fs-sm-5">
              You will receive Order Updates and your <br /> Order receipt in
              your email.
            </h1>
            <h1 className="fs-2 fs-sm-3">
              Because of you I am one t shirt closer to moving <br /> out of
              moms basement!
            </h1>
            <div className="w-75 d-flex justify-content-end">
          <img
            className="img-fluid w-25 pt-5 mt-1"
            src={checkOutAvatar}
            alt=""
          />
          </div>
          </div>
        </div> */}
      <div className="d-flex justify-content-center">
        <div>
          <p className="fs-2 text-warning">
            Thanks for your order ! <br /> Will be Shipped In the next two dAys
          </p>
          <p className="fs-4 text-white">
            You will receive Order Updates and your Order receipt in your email.
          </p>
          <p className="fs-3 text-white">
            Because of you I am one t shirt closer to moving out of moms
            basement!
          </p>
        </div>
        <div className="checkout-avatar">
          <img className="img-fluid" src={checkOutAvatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
