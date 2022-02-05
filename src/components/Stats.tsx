import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import groupBy from "lodash/fp/groupBy";
import "./Stats.scss";
import { PercentileCircle } from "./Detail/PercentileCircle";
import { getScaleColor, getScaleTextColor } from "utils/scale";

export const Stat = ({
  style = {},
  name,
  size,
  total,
  showPercent = true,
}: any) => {
  const percent = (size / total) * 100;
  const style2 = {
    ...style,
    width: percent + "%",
  };
  const title = `${name} ${percent.toFixed(2)}% (${size}/${total})`;
  const isSmall = percent < 10;
  const isReallySmall = percent < 5;
  const text =
    isSmall || !showPercent ? name : `${name} ${Math.round(percent)}%`;
  return (
    <abbr
      style={style2}
      title={title}
      className={`Stat Stat--${name} ${isSmall ? "small" : ""} ${
        isReallySmall ? "really-small" : ""
      } ${showPercent ? "showPercent" : "noShowPercent"}`}
    >
      <span className="StatText">{text}</span>
    </abbr>
  );
};

export const PercentileCount = ({
  percentile,
  count,
}: {
  percentile: number;
  count: number;
}) => (
  <>
    <PercentileCircle percentile={percentile} />
    <span className="count" style={{ color: getScaleTextColor(percentile) }}>
      {count}
    </span>
  </>
);

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
    .filter((t) => t.dpg !== undefined);
  // .sort((a, b) => a.dpg - b.dpg);
  const firstDigit = (p: any) => p.dpg.toFixed(0).padStart(2, "0")[0];
  const pGroups = groupBy(firstDigit, percentiles);
  const pGroupEntries = Object.entries(pGroups);

  return (
    <div className="Stats">
      <div className="StyleBars">
        {styles.map(([s, ts]) => (
          <Stat key={s} name={s} size={ts.length} total={teas.length} />
        ))}
      </div>
      <div className="PercentileList StyleBars">
        {pGroupEntries.map(([k, xs]) => (
          // <abbr key={k} title={xs.map((x: any) => x.name).join("\n")}>
          //   <PercentileCount percentile={tenX(k)} count={xs.length} />
          // </abbr>
          <Stat
            style={{
              border: `2px solid ${getScaleColor(tenX(k))}`,
              color: getScaleTextColor(tenX(k)),
            }}
            name={pLabel(k)}
            size={xs.length}
            total={percentiles.length}
            showPercent={false}
          />
        ))}
      </div>
    </div>
  );
};
function pLabel(p: string) {
  // if (p === "0") return "< 10";
  // if (p === "9") return "90+";
  return tenX(p);
}

function tenX(k: string): number {
  return parseInt(k, 10) * 10;
}
