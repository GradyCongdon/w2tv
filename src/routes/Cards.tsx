import { Card } from "components/TeaProduct/Card";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import { ImageSubject } from "types/TeaProduct";
import "./Cards.scss";

export const Cards = () => {
  const { subject } = useParams();
  const teas = useRecoilValue(teasState);

  const $Teas = teas.map((tea) => (
    <Card
      key={tea.slug}
      tea={tea}
      subject={(subject as ImageSubject) || "wrapperTop"}
    />
  ));
  return <section className="TeaCards">{$Teas}</section>;
};
