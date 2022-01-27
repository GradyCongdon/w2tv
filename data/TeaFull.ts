export interface TeaFull {
  name: string;
  year: number;
  quantity: number;
  key: string;
  type: Type;
  id: number;
  sku: null;
  tags: string[];
  brand: Brand;
  inStock: boolean;
  forms: Form[];
  description?: string;
  thumbnail_url?: string;
  url?: string;
  version?: string;
  images: Image[];
}

export enum Brand {
  White2Tea = "white2tea",
}

export interface Form {
  name: string;
  price: number;
  inStock: boolean;
  grams: number;
  dpg: number;
  size: Size;
  percentiles: Percentiles;
}

export interface Percentiles {
  size: number;
  type: number;
  typeSize: number;
  all: number;
  dpg: number;
}

export enum Size {
  Brick = "brick",
  Cake = "cake",
  Mini = "mini",
  Sample = "sample",
  Unknown = "unknown",
}

export interface Image {
  key: string;
  url: string;
  predictedType: PredictedType;
  probability: number;
}

export enum PredictedType {
  Bamboo = "bamboo",
  Leaf = "leaf",
  Soup = "soup",
  Tea = "tea",
  Tong = "tong",
  Underside = "underside",
  Wrapper = "wrapper",
}

export enum Type {
  BlackTea = "Black Tea",
  Heicha = "Heicha",
  Oolong = "Oolong",
  RawPuerTea = "Raw Puer Tea",
  RipePuerTea = "Ripe Puer Tea",
  WhiteTea = "White Tea",
}
