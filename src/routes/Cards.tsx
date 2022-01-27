import { Card } from "components/TeaProduct/Card";
import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import "./Cards.scss";

export const Cards = () => {
  const teas = useRecoilValue(teasState);
  const $Teas = teas.map((tea) => <Card key={tea.slug} tea={tea} />);
  return <section className="TeaCards">{$Teas}</section>;
};
