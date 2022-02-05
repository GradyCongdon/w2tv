import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import groupBy from "lodash/fp/groupBy";
import "./Stats.scss";
import { PercentileCircle } from "./Detail/PercentileCircle";
import { getScaleTextColor } from "utils/scale";

export const Stat = ({ name, size, total }: any) => {
  const percent = (size / total) * 100;
  const style = {
    width: percent + "%",
  };
  const title = `${name} ${percent.toFixed(2)}% (${size}/${total})`;
  const text = `${name} ${Math.round(percent)}%`;

  return (
    <abbr
      style={style}
      title={title}
      className={`Stat ${name} ${percent < 10 ? "small" : ""}`}
    >
      <span className="StatText">{text}</span>
    </abbr>
  );
};

export const Stats = () => {
  const teas = useRecoilValue(teasState);
  const styleGroups = groupBy("style", teas);
  const styles = Object.entries(styleGroups).sort((a, b) =>
    b[0].localeCompare(a[0])
  );
  const percentiles = teas
    .map((t) => ({
      name: t.name,
      dpg: t.forms[0]?.percentiles?.dpg,
    }))
    .filter((t) => t.dpg && t.dpg > 0);
  // .sort((a, b) => a.dpg - b.dpg);
  const firstDigit = (p: any) => p.dpg.toString()[0];
  const pGroups = groupBy(firstDigit, percentiles);

  return (
    <div className="Stats">
      <div className="StyleBars">
        {styles.map(([s, ts]) => (
          <Stat key={s} name={s} size={ts.length} total={teas.length} />
        ))}
      </div>
      <div className="PercentileList">
        {Object.entries(pGroups).map(([k, xs]) => (
          <abbr key={k} title={xs.map((x: any) => x.name).join("\n")}>
            <PercentileCircle percentile={tenX(k)} />
            <span
              className="count"
              style={{ color: getScaleTextColor(tenX(k)) }}
            >
              {xs.length}
            </span>
          </abbr>
        ))}
      </div>
    </div>
  );
};

function tenX(k: string): number {
  return parseInt(k, 10) * 10;
}
