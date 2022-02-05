import "./PercentileCircle.scss";
import { getScaleColor, getScaleTextColor } from "utils/scale";

export const PercentileCircle = ({ percentile }: { percentile: number }) => {
  const style = {
    left: `${percentile * 2}px`,
    borderColor: getScaleColor(percentile),
    color: getScaleTextColor(percentile),
  };

  const displayed = Math.floor(percentile);
  return (
    <span className="PercentileCircle" style={style}>
      {displayed}
    </span>
  );
};
