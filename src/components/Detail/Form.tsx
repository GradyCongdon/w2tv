import * as TeaProduct from "types/TeaProduct";
import "./Offer.scss";

type Props = {
  form: TeaProduct.Form;
};

export const Form = ({ form }: Props) => {
  const { name, inStock, price } = form;
  let mass = parseInt(name.replace(/\D/g, ""), 10);

  if (mass === 1) mass = 1000;
  const tilde = name.startsWith("~") ? "~" : "";

  const style = {
    textDecoration: inStock ? "none" : "line-through",
    color: inStock ? "inherit" : "var(--grey-medium)",
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
