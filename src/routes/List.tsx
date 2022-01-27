import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import { TeaTableRow } from "../components/TeaProduct/List";

export const List = () => {
  const teas = useRecoilValue(teasState);

  return (
    <table className="List">
      <tbody>
        {teas.map((t) => (
          <TeaTableRow key={t.slug} tea={t} />
        ))}
      </tbody>
    </table>
  );
};
