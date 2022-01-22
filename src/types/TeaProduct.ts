export type ImageType =
  | "wrapper"
  | "tea"
  | "soup"
  | "leaf"
  | "tong"
  | "underside";

export interface Image {
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
  wrapper: Image;
  bing: Image;
  soup: Image;
  description: string;
}

export interface EntryProps {
  tea: TeaProduct;
}

export interface ArrayProps {
  teas: TeaProduct[];
}
