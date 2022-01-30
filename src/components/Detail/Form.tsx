import * as TeaProduct from "types/TeaProduct";
import "./Table.scss";
import "./Form.scss";

const PriceTable = ({ style, first, second, third }: any) => (
  <div style={style} className="Table table">
    <h2>{first}</h2>
    <h3>{second}</h3>
    <h4>{third}</h4>
  </div>
);

type Props = {
  form: TeaProduct.Form;
  style: string;
  index: number;
};

export const FormPricesTable = ({ form, style: teaStyle, index }: Props) => {
  const { inStock, price } = form;

  var { nan, mass, name } = getMassName(form);
  const $price = "$" + price.toFixed(2);
  const $ppg = nan ? "$?" : "$" + (price / mass).toFixed(2);

  const style = {
    textDecoration: inStock ? "none" : "line-through",
    color: inStock ? "inherit" : "var(--grey-medium)",
  };

  return (
    <div className="FormPricesTable">
      <PriceTable style={style} first={name} second={$price} third={$ppg} />
    </div>
  );
};

export const FormPercentileTable = ({ form }: Props) => {
  const { inStock, percentiles } = form;

  const style = {
    textDecoration: inStock ? "none" : "line-through",
    color: inStock ? "inherit" : "var(--grey-medium)",
  };
  const all = getNumberWithOrdinal(percentiles.all);
  const dpg = getNumberWithOrdinal(percentiles.dpg);

  return (
    <div style={style} className="Percentile table table--fit">
      <h5>percentile</h5>
      <h3>
        {all.number}
        <sup>{all.ordinal}</sup>
      </h3>
      <h3>
        {dpg.number}
        <sup>{dpg.ordinal}</sup>
      </h3>
    </div>
  );
};

function getMassName(form: TeaProduct.Form) {
  const { name: _name } = form;
  let mass = parseInt(_name.replace(/\D/g, ""), 10);
  if (mass === 1) mass = 1000;
  const tilde = _name.startsWith("~") ? "~" : "";
  const nan = Number.isNaN(mass);
  const name = nan ? "?" : `${tilde}${mass}g`;
  return { nan, mass, name };
}

const suffix = ["th", "st", "nd", "rd"];
function getNumberWithOrdinal(_number: number) {
  const number = Math.round(_number);
  const v = number % 100;
  const ordinal = suffix[(v - 20) % 10] || suffix[v] || suffix[0];
  return {
    number,
    ordinal,
  };
}
