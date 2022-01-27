import { useEffect, useState } from "react";
import { TeaOembed } from "types/Oembed";
import { OfferHeading, Offer } from "./Offer";
import "./Detail.scss";
import { LinkButton } from "./LinkButton";
import { Description } from "./Description";
import { Image } from "components/TeaProduct/Image";

export const WIDTH = 400;
export const HEIGHT = 400;

export type OembedProps = {
  oembed: TeaOembed;
};

export const useOembed = (slug: string): [TeaOembed | null, string] => {
  const [status, setStatus] = useState("start");
  const [detail, setDetail] = useState<TeaOembed | null>(null);
  useEffect(() => {
    const get = async () => {
      try {
        const url = `/w2tv/products/${slug}.oembed`;
        setStatus("loading");
        const res = await fetch(url);
        const oembed: TeaOembed = await res.json();
        // await delay(4000);
        setDetail(oembed);
        setStatus("resolved");
      } catch (e) {
        setDetail(null);
        setStatus("error");
      }
    };
    get();
  }, [slug]);
  return [detail, status];
};

export const OembedDetail = ({ oembed }: OembedProps) => {
  const { title, description, thumbnail_url, offers, url } = oembed;

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
