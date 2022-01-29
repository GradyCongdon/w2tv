import { getImageUrl, TeaProduct } from "types/TeaProduct";
import { Image } from "components/TeaProduct/Image";
import { Description } from "./Description";
import { LinkButton } from "./LinkButton";
import "./Detail.scss";
import { FormPricesTable } from "./Form";

type Props = {
  tea: TeaProduct;
};

export const Detail = ({ tea }: Props) => {
  const { year, name, description, url, forms, style } = tea;
  const size = 400;
  const imageUrl = getImageUrl(tea.images.wrapperTop || tea.thumbnailUrl, size);
  const fullName = `${year} ${name}`;

  return (
    <article className="TeaDetail">
      <h1 className="title glow">{fullName}</h1>
      <Image src={imageUrl} alt={name} width={size} height={size} />
      {forms.map((f, i) => (
        <FormPricesTable key={f.name} index={i} form={f} style={style} />
      ))}
      <Description glowText={fullName} description={description} />
      <LinkButton url={url} />
    </article>
  );
};
