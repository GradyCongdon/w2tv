import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import { TeaProduct } from "types/TeaProduct";
import "./Detail.scss";

const useDetail = (): TeaProduct | undefined => {
  const teas = useRecoilValue(teasState);
  const { detailSlug } = useParams();
  return teas.find((t) => t.slug === detailSlug);
};
type Props = {
  tea: TeaProduct
}

export const OembedDetail = ({tea}: Props) => {
  const {name, forms, description, } = tea;

  return (
    <article className="TeaDetail">
      <h1 className="title glow">{title}</h1>
      <Image src={thumbnail_url} alt={title} width={WIDTH} height={HEIGHT} />
      <OfferHeading />
      {offers.map((o) => (
        <Offer key={o.sku} offer={o} />
      ))}
      <Description glowText={title} description={description} />
      <LinkButton url={url} />
    </article>
  );
};
