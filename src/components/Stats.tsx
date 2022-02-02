import { useRecoilValue } from "recoil";
import { personalFilterState } from "states/personalFilters";
import { teasState } from "states/teas";
import groupBy from "lodash/fp/groupBy";
import "./Stats.scss";

export const Stat = ({ name, size, total }: any) => {
  const percent = (size / total) * 100;
  const style = {
    width: percent + "%",
  };
  return (
    <div style={style} className={`Stat ${name}`}>
      {name} {Math.round(percent)}%
    </div>
  );
};

export const Stats = () => {
  const personalFilter = useRecoilValue(personalFilterState);
  const teas = useRecoilValue(teasState);

  if (personalFilter !== "owned") return null;
  const styles = groupBy("style", teas);

  return (
    <div className="Stats">
      {Object.entries(styles).map(([s, ts]) => (
        <Stat key={s} name={s} size={ts.length} total={teas.length} />
      ))}
    </div>
  );
};
