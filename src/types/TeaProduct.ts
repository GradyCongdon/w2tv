export type Style =
  | "white"
  | "green"
  | "black"
  | "hongcha"
  | "raw"
  | "ripe"
  | "oolong"
  | "huangpian"
  | "unknown";

export type Size =
  | "cake"
  | "mini"
  | "bamboo"
  | "square"
  | "brick"
  | "ball"
  | "sample"
  | "unknown";

export type ImageSubject =
  | "leaf"
  | "soup"
  | "teaBottom"
  | "teaDetail"
  | "teaTop"
  | "tong"
  | "chabu"
  | "shirt"
  | "wrapperBottom"
  | "wrapperDetail"
  | "wrapperTop";

export const getImageUrl = (url: string, size: number): string =>
  url.replace("SIZEx", `${size}x`);

export type Images = Partial<Record<ImageSubject, string>>;

export interface Percentile {
  size: number;
  type: number;
  typeSize: number;
  all: number;
  dpg: number;
}

export interface Form {
  name: string;
  price: number;
  inStock: boolean;
  grams: number;
  dpg: number;
  size: Size;
  percentiles: Percentile;
}

// export enum FormName {
//   Name7G = "7g",
//   The100G = "100g",
//   The10G = "10g",
//   The120G = "120g",
//   The1Kg = "1kg",
//   The200G = "200g",
//   The250G = "250g",
//   The250GBrickTuoCake = "250g Brick/Tuo/Cake",
//   The25G = "25g",
//   The25GSample = "25g Sample",
//   The357G = "357g",
//   The357GCake = "357g Cake",
//   The360G = "360g",
//   The49G = "~49g",
//   The49GStack = "49g Stack",
//   The50G = "~50g",
//   The7G = "~7g",
//   The7GMini = "7g Mini",
//   The80G = "80g",
// }

export interface TeaProduct {
  slug: string;
  name: string;
  year: number;
  quantity: number;
  description: string;
  url: string;
  thumbnailUrl: string;
  version: string;
  style: Style;
  size: Size;
  images: Images;
  forms: Form[];
  tags: string[];
  owned?: boolean;
}
