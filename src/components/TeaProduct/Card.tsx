import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedSlugState } from "states/selectedSlug";
import { viewState } from "states/view";
import { whiteBalancedState } from "states/whiteBalanced";
import { TeaProduct, getImageSubject } from "types/TeaProduct";
import { Image } from "./Image";
import "./Card.scss";

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
  const image = getImageSubject(view, 400, tea);

  const isSelected = selectedSlug === oSlug;
  const onClick = () => setSelectedSlug(oSlug);
  const classes = `TeaCard ${isSelected ? "selected" : ""}`;

  return (
    <figure className={classes} onClick={onClick} id={oSlug}>
      <div className="content">
        <div className="icon"></div>
        <h3 className="year glow">{year}</h3>
        <h2 className="name">{name}</h2>
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        )}
      </div>
    </figure>
  );
};
