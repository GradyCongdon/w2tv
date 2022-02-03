import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import groupBy from "lodash/fp/groupBy";
import "./Stats.scss";

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
  // if (styles.length <= 1) return null;

  return (
    <div className="Stats">
      {styles.map(([s, ts]) => (
        <Stat key={s} name={s} size={ts.length} total={teas.length} />
      ))}
    </div>
  );
};
