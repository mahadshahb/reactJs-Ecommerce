const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits:2,
  }).format(price / 2);
};

export default FormatPrice;
