import { OfferOembed } from "types/Oembed";

type OfferProps = {
  offer: OfferOembed;
};

export const Offer = ({ offer }: OfferProps) => {
  const { title, price, in_stock } = offer;
  let mass = parseInt(title.replace(/\D/g, ""), 10);
  if (mass === 1) mass = 1000;
  const tilde = title.startsWith("~") ? "~" : "";

  const style = {
    textDecoration: in_stock ? "none" : "line-through",
    color: in_stock ? "inherit" : "var(--grey-medium)",
  };

  const nan = Number.isNaN(mass);
  const $size = nan ? "?" : `${tilde} ${mass}`;
  const $price = price.toFixed(2);
  const $ppg = nan ? "?" : (price / mass).toFixed(2);

  return (
    <div style={style} className="Offer table">
      <h2>{$size}g</h2>
      <h3>${$price}</h3>
      <h4>${$ppg}</h4>
    </div>
  );
};

export const OfferHeading = () => (
  <div className="OfferHeading table">
    <span>Size</span>
    <span>Price</span>
    <span>$ / g</span>
  </div>
);
