import "./product.css";
import lifeEndTen from "../../assets/Images/Life-ends-at-ten.png";

const Product = () => {
  return (
    <div className="product__bg">
      <div className="product-board w-100 border mx-auto">
        <div className="mb-5 border p-4">
          <div className="text-center w-100 ms-5 px-5 border">
            <div className="">
              <h5>
                life ends at ten <span className="text-success">s20</span>
              </h5>
              <img className="img-fluid" style={{width: "60%"}} src={lifeEndTen} alt="" />
              <div className="d-flex gap-1 justify-content-center">
                <p className="border px-1">s</p>
                <p className="border px-1">m</p>
                <p className="border px-1">xl</p>
                <p className="border px-1">xxl</p>
              </div>
              <button className="add-to-cart-btn">add to cart</button>
              <div className="text-center p-2" style={{fontSize: '14px'}}>
                <p className="fw-bold">Age is just a Number!</p>
                <p className="">
                  This shirt is hand printed on a 100 percent cotton hanes beefy
                  T. There is a size chart in the FAQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
