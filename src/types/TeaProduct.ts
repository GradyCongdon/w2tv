import { Form, ImageFull } from "./FullTea.ts";

export type ImageType =
  | "wrapper"
  | "tea"
  | "soup"
  | "leaf"
  | "tong"
  | "underside";

export interface TeaImage {
  type: ImageType;
  src: string;
  srcWhiteBalanced: string;
  alt: string;
  width: number;
  height: number;
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
