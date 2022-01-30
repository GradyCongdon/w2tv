import { Form, Style } from "types/TeaProduct";
import "./Lines.scss";

const scale = [
  // "#ffffe0",
  "#ffe6cb",
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
    left: `${number * 2}px`,
    border: `2px solid ${scale[scaleIndex]}`,
    // color: number <= 30 ? "#777" : scale[scaleIndex],
    color: number <= 30 ? "rgb(197, 134, 42)" : scale[scaleIndex],
    // color: number >= 60 ? "white" : "black",
  };
  return (
    <div className="Line">
      <span className="Label" style={style}>
        {number}
      </span>
    </div>
  );
};

export const LineTable = ({ first, second, percentile }: any) => {
  return (
    <div className="Percentile table ">
      {/* <h5>{first}</h5> */}
      {/* <h5 style={{ justifySelf: "flex-end" }}>{second}</h5> */}
      <h5>{second}</h5>
      <Line percentile={percentile} />
    </div>
  );
};

export const Lines = ({
  forms,
  teaStyle,
}: {
  forms: Form[];
  teaStyle: Style;
}) => {
  if (!forms.length) return null;
  const { percentiles } = forms[0];
  const { dpg, typeSize } = percentiles;
  return (
    <div className="Lines">
      <LineTable first={""} second={"overall"} percentile={dpg} />
      <LineTable first={""} second={`${teaStyle}`} percentile={typeSize} />
    </div>
  );
};
