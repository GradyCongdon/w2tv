import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import { ListRow } from "components/TeaProduct/ListRow";
import "./List.scss";

export const List = () => {
  const teas = useRecoilValue(teasState);

  return (
    <div className="List">
      {teas.map((t) => (
        <ListRow key={t.slug} tea={t} />
      ))}
    </div>
  );
};

export default List;
