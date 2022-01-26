// import { Form, ImageFull } from "./FullTea.ts";
import { Form, ImageFull, ImageSubject } from "./FullTea";

export interface TeaImage {
  type: ImageSubject;
  src: string;
  srcWhiteBalanced: string;
  alt: string;
  width: number;
  height: number;
}

const defaultImage = (subject: ImageSubject) => ({
  url: "",
  subject,
});

export function getImageSubject(
  view: ImageSubject,
  size: number,
  tea: TeaProduct
): TeaImage {
  const image =
    tea.images.find((i) => i.subject === view) || defaultImage(view);
  return {
    alt: tea.name,
    src: image.url.replace("SIZE", size.toString()),
    width: size,
    height: size,
    type: image.subject || view,
    srcWhiteBalanced: image.url,
  };
}

export type TeaStyle =
  | "white"
  | "green"
  | "black"
  | "hongcha"
  | "raw"
  | "ripe"
  | "oolong"
  | "huangpian"
  | "unknown";

export type TeaSize =
  | "cake"
  | "mini"
  | "bamboo"
  | "square"
  | "brick"
  | "ball"
  | "sample"
  | "unknown";

export interface TeaProduct {
  slug: string;
  oSlug: string;
  year: number;
  style: TeaStyle;
  name: string;
  size: TeaSize;
  wrapper: TeaImage;
  bing: TeaImage;
  soup: TeaImage;
  description: string;
  images: ImageFull[];
  forms: Form[];
}

export interface EntryProps {
  tea: TeaProduct;
}

export interface ArrayProps {
  teas: TeaProduct[];
}
