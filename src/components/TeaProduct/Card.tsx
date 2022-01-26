import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedSlugState } from "states/selectedSlug";
import { viewState } from "states/view";
import { whiteBalancedState } from "states/whiteBalanced";
import { TeaProduct } from "types/TeaProduct";
import { Image } from "./Image";
import "./Card.scss";

interface TeasProps {
  teas: TeaProduct[];
}
export const Cards = ({ teas }: TeasProps) => {
  const $Teas = teas.map((tea) => <Card key={tea.slug} tea={tea} />);
  return <section className="TeaCards">{$Teas}</section>;
};

export type Props = {
  tea: TeaProduct;
};

export const Card = ({ tea }: Props) => {
  const [viewGlobal] = useRecoilState(viewState);
  const [selectedSlug, setSelectedSlug] = useRecoilState(selectedSlugState);
  const [whiteBalanced] = useRecoilState(whiteBalancedState);
  const [view, setView] = useState(viewGlobal);

  useEffect(() => {
    setView(viewGlobal);
  }, [viewGlobal]);

  const { year, name, oSlug } = tea;
  const { src: _src, srcWhiteBalanced, width, height } = tea[view];
  const src = whiteBalanced ? srcWhiteBalanced : _src;
  const isSelected = selectedSlug === oSlug;
  const onClick = () => setSelectedSlug(oSlug);
  const classes = `TeaCard ${isSelected ? "selected" : ""}`;

  return (
    <figure className={classes} onClick={onClick} id={oSlug}>
      <div className="content">
        <div className="icon"></div>
        <h3 className="year glow">{year}</h3>
        <h2 className="name">{name}</h2>
        <Image src={src} alt={name} width={width} height={height} />
      </div>
    </figure>
  );
};
