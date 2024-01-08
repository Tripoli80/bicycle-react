import "./stat.css";
export const Stat = ({ productList }) => {
  const totalBikes = productList.length;
  const availableBikes = productList.filter(
    (product) => product.status === "available"
  ).length;
  const bookedBikes = productList.filter(
    (product) => product.status === "busy"
  ).length;
  const averagePrice = (
    productList.reduce((acc, product) => {
      return acc + product.price;
    }, 0) / productList.length
  ).toFixed(2);

  return (
    <div className="stat">
      <h2 className="stat__title">STATISTICS</h2>
      <p className="stat__result">
        Total Bikes: <span className="result"> {totalBikes}</span>
      </p>
      <p className="stat__result">
        Available Bikes: <span className="result">{availableBikes}</span>
      </p>
      <p className="stat__result">
        Booked Bikes:<span className="result"> {bookedBikes}</span>
      </p>
      <p className="stat__result">
        Average bike cost: <span className="result"> {averagePrice}</span>{" "}
        UAH/hr.
      </p>
    </div>
  );
};
