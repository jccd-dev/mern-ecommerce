const SummaryItem = ({ itemText, price }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
  return (
    <div
      className={`sumItem my-7 flex justify-between font-normal ${
        itemText === "Total" ? "text-xl font-semibold" : "text-lg"
      }`}
    >
      <div className="sumItemText">{itemText}</div>
      <div className="sumItemPrice">{formattedPrice}</div>
    </div>
  );
};

export default SummaryItem;
