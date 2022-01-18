import { useEffect, useState } from "react";
import { OfferOembed, TeaOembed } from "./Oembed";

import './TeaDetail.scss';

const WIDTH = 800;
const HEIGHT = 800;
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const useDetail = (slug: string): [TeaOembed | null, string] => {
  const [status, setStatus] = useState('start');
  const [detail, setDetail] = useState<TeaOembed | null>(null);
  useEffect(() => {
    const get = async () => {
      try {
        const s = reslug(slug);
        const url = `/w2tv/products/${s}.oembed`;
        setStatus('loading');
        const res = await fetch(url);
        const oembed = (await res.json()) as TeaOembed;
        // await delay(4000);
        setDetail(oembed);
        setStatus('resolved');
      } catch (e) {
        setDetail(null);
        setStatus('error');
      }
    }
    get();
  }, [slug]);
  return [detail, status];
}
const sunday = {
  "product_id": "2020-saturday-mass",
  "title": "2020 Saturday Mass",
  "description": "<p data-mce-fragment=\"1\">Our Saturday Mass is a blend of our <a title=\"small batch shu Puer tea from white2tea\" href=\"https://white2tea.com/blogs/blog/what-is-small-batch-shou-puerh-tea\" target=\"_blank\">small batch shu Puer</a> and chenpi (Mandarin orange skin). <br><br>This blend focuses on the thicker, heavy aspects of shu Puer and an aged orange skin that offers a darker medicinal citrus aroma. The tea has a thick texture with a smooth, heavy body and dark flavor profile. Perfect tea for cold or wet weather. Drink now or age as you please.</p>\n<p data-mce-fragment=\"1\">Each cake is 200 grams of tea.<br></p>",
  "brand": "white2tea",
  "offers": [
    {
      "title": "200g",
      "offer_id": 37078002467007,
      "sku": "12008A",
      "price": 66,
      "currency_code": "USD",
      "in_stock": true
    },
    {
      "title": "25g",
      "offer_id": 37078002499775,
      "sku": "12008B",
      "price": 9.9,
      "currency_code": "USD",
      "in_stock": true
    }
  ],
  "thumbnail_url": "",
  "url": "https://white2tea.com/products/2020-saturday-mass",
  "provider": "white2tea",
  "version": "1.0",
  "type": "link"
}

export const Start = () => {
  return (
    <h1>start</h1>
  );
}

export const Loading = () => {
  return (
    <h1>loading...</h1>
  );
}


export const Error = ({ slug }: any) => {
  return (
    <>
      <h1>error</h1>
      <h1>{slug}</h1>
      <h1>{reslug(slug)}</h1>
    </>
  );
}

type OfferProps = {
  offer: OfferOembed;
}

export const Offer = ({ offer }: OfferProps) => {
  const { title, price, in_stock } = offer;
  const mass = parseInt(title.replace(/\D/g, ''), 10);
  const ppg = price / mass;
  const tilde = title.startsWith('~') ? "~" : ''

  const style = {
    textDecoration: in_stock ? 'none' : 'line-through',
    color: in_stock ? 'inherit' : 'var(--grey-medium)',
  }

  return (
    <div style={style} className="Offer table">
      <h2>{tilde}{mass}g</h2>
      <h3>${price.toFixed(2)}</h3>
      <h4>${ppg.toFixed(2)}</h4>
    </div>
  );
}



type DetailProps = {
  detail: TeaOembed;
}

const OfferHeading = () => (
  <div className="OfferHeading table">
    <span>Size</span>
    <span>Price</span>
    <span>$ / g</span>
  </div>);

export const Detail = ({ detail }: DetailProps) => {
  const { title, description, thumbnail_url, offers } = detail;
  const titleRegExp = new RegExp(title, 'g');
  const glowTitle = `<span class="glow">${title}</span>`;
  const descriptionGlow = description.replace(titleRegExp, glowTitle)
  const image = thumbnail_url 
    ? <img className="thumbnail responsive" src={thumbnail_url} alt={title} width={WIDTH} height={HEIGHT} />
    : <div className="placeholder"><div className="circle"></div></div>

  return (
    <article className="TeaDetail">
      <h1 className="title glow">{title}</h1>
      {image}
      <OfferHeading />
      {offers.map(o => <Offer key={o.sku} offer={o} />)}
      <div className="description" dangerouslySetInnerHTML={{ __html: descriptionGlow }} />
    </article>
  );
}

export const Skeleton = () => {
  return (
    <div className="skeleton">
      <Detail detail={sunday} />
    </div>
  )
}

export const TeaDetail = ({ slug }: any) => {
  const [detail, status] = useDetail(slug);
  if (detail) return <Detail detail={detail as TeaOembed} />;

  switch (status) {
    case 'start': return <Skeleton />;
    case 'loading': return <Skeleton />;
    // case 'resolved': return <Skeleton />;
    // case 'resolved': return <Detail detail={detail as TeaOembed} />;
    default: return <Error slug={slug} />;
  }
}

function reslug(slug: string) {
  return slug
}
