import { getImageUrl, TeaProduct } from "types/TeaProduct";
import { Image } from "components/TeaProduct/Image";
import { Description } from "./Description";
import { LinkButton } from "./LinkButton";
import { OfferHeading } from "./Offer";
import "./Detail.scss";
import { Form } from "./Form";

type Props = {
  tea: TeaProduct;
};

export const Detail = ({ tea }: Props) => {
  const { year, name, description, url, forms } = tea;
  const size = 400;
  const imageUrl = getImageUrl(tea.images.wrapperTop || tea.thumbnailUrl, size);
  const fullName = `${year} ${name}`;

  return (
    <article className="TeaDetail">
      <h1 className="title glow">{fullName}</h1>
      <Image src={imageUrl} alt={name} width={size} height={size} />
      <OfferHeading />
      {forms.map((f) => (
        <Form key={f.name} form={f} />
      ))}
      <Description glowText={fullName} description={description} />
      <LinkButton url={url} />
    </article>
  );
};
