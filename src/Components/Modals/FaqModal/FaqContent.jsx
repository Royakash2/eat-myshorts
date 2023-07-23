const FaqContent = () => {
  return (
    <div className="d-flex flex-sm-row justify-content-center align-items-center px-2 gap-1">
      <div className="w-50 h-100 content-text">
        <p className="fs-6">
          Q How do the T-shirts fit? <br /> Every shirt has a size chart in the
          description below. <br /> <br /> Q: Why was my order returned to sender? USPS
          returns orders back to me if the address on the order is
          “undeliverable”. I’ll do the best I can to get them back out in a
          timely manner but I do need the right address to ship to.
        </p>
      </div>
      <div className="w-50 h-100 content-text">
        <p className="fs-6">
          {" "}
          Q: Can I cancel my order? <br /> Im not Bezos of Jeff, I buy blanks
          and screen print them made to order dolo, once the order is placed I
          cant cancel sowwey people. <br /> <br /> Q: How long does shipping
          take? <br />
          Every shirt will be shipped within the 5 business days of order if not
          I’ll send an extra shirt for free.
        </p>
      </div>
    </div>
  );
};

export default FaqContent;
