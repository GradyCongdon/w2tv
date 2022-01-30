import { getImageUrl, TeaProduct } from "types/TeaProduct";
import { Image } from "components/TeaProduct/Image";
import { Description } from "./Description";
import { LinkButton } from "./LinkButton";
import "./Detail.scss";
import { FormPricesTable } from "./Form";
import { IMAGE_SIZE } from "types/const";
import { TableHeading } from "./Table";
import { Lines } from "./Lines";
import { formatNumber } from "utils/formatNumber";
import { OwnedButton } from "./OwnedButton";

type Props = {
  tea: TeaProduct;
};

export const Detail = ({ tea }: Props) => {
  const { year, name, description, url, forms, style, quantity, slug } = tea;
  const size = IMAGE_SIZE;
  const imageUrl = getImageUrl(tea.images.wrapperTop || tea.thumbnailUrl, size);
  const fullName = `${year} ${name}`;

  return (
    <article className="TeaDetail">
      <h1 className="title glow">{fullName}</h1>
      <Image src={imageUrl} alt={name} width={size} height={size} />
      <p className="quantity">{formatNumber(quantity)}</p>
      {!forms.length ? null : (
        <TableHeading headings={["Size", "Price", "$ / g"]} />
      )}
      {forms.map((f, i) => (
        <FormPricesTable key={f.name} index={i} form={f} style={style} />
      ))}
      <Lines forms={forms} teaStyle={style} />
      <Description glowText={fullName} description={description} />
      <LinkButton url={url} />
      <OwnedButton slug={slug} />
    </article>
  );
};
