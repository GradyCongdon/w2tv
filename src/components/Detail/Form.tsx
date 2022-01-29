import * as TeaProduct from "types/TeaProduct";
import "./Table.scss";
import "./Form.scss";
import { TableHeading } from "./Table";

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
  const { percentiles } = form;
  const { dpg, typeSize } = percentiles;

  return (
    <>
      <TableHeading headings={["Size", "Price", "$ / g"]} />
      <PriceTable style={style} first={name} second={$price} third={$ppg} />
      <FormPercentileLineTable first={""} second={"overall"} percentile={dpg} />
      <FormPercentileLineTable
        first={""}
        second={`${teaStyle}`}
        percentile={typeSize}
      />
    </>
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

const scale = [
  "#ffffe0",
  "#ffe3af",
  "#ffc58a",
  "#ffa474",
  "#fa8366",
  "#ed635c",
  "#db4551",
  "#c52840",
  "#aa0e27",
  "#8b0000",
];

export const Line = ({ percentile }: { percentile: number }) => {
  const number = Math.floor(percentile);
  const scaleIndex = +number.toFixed(0).padStart(2, "0")[0];
  const style = {
    left: `${number}px`,
    backgroundColor: scale[scaleIndex],
    color: number >= 60 ? "white" : "black",
  };
  return (
    <div className="Line">
      <span className="Label" style={style}>
        {number}
      </span>
    </div>
  );
};

export const FormPercentileLineTable = ({ first, second, percentile }: any) => {
  return (
    <div className="Percentile table table--fit">
      <h5>{first}</h5>
      {/* <h5 style={{ justifySelf: "flex-end" }}>{second}</h5> */}
      <h5>{second}</h5>
      <Line percentile={percentile} />
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
