import { getImageUrl, ImageSubject, TeaProduct } from "types/TeaProduct";
import { Image } from "./Image";
import "./Card.scss";
import { useSearchParams } from "react-router-dom";

export type Props = {
  tea: TeaProduct;
  subject: ImageSubject;
};

export const Card = ({ tea, subject }: Props) => {
  const [params, setParams] = useSearchParams();
  const detailSlug = params.get("detail");

  const { year, name, slug } = tea;
  const setSelected = () =>
    setParams({
      detail: slug,
    });

  const imageUrl = tea.images[subject];
  const size = 400;

  const isSelected = detailSlug === slug;
  const classes = `TeaCard ${isSelected ? "selected" : ""}`;

  return (
    <figure className={classes} onClick={setSelected} id={slug}>
      <div className="content">
        <div className="icon"></div>
        <h3 className="year glow">{year}</h3>
        <h2 className="name">{name}</h2>
        <Image
          src={getImageUrl(imageUrl || "", size)}
          alt={name}
          width={size}
          height={size}
        />
      </div>
    </figure>
  );
};
