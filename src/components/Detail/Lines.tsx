import { Form, Style } from "types/TeaProduct";
import "./Lines.scss";
import { PercentileCircle } from "./PercentileCircle";

export const Line = ({ percentile }: { percentile: number }) => {
  return (
    <div className="Line">
      <PercentileCircle percentile={percentile} />
    </div>
  );
};

export const LineTable = ({
  label,
  percentile,
}: {
  label: string;
  percentile: number;
}) => {
  return (
    <div className="Percentile table ">
      <h5>{label}</h5>
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
      <LineTable label={"overall"} percentile={dpg} />
      <LineTable label={`${teaStyle}`} percentile={typeSize} />
      <div className="LabelWrapper">
        <span className="LinesLabel">cost percentile</span>
      </div>
    </div>
  );
};
