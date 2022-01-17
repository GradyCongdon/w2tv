export interface TeaOembed {
  product_id: string;
  title: string;
  description: string;
  brand: string;
  offers: OfferOembed[];
  thumbnail_url: string;
  url: string;
  provider: string;
  version: string;
  type: string;
}

export interface OfferOembed {
  title: string;
  offer_id: number;
  sku: string;
  price: number;
  currency_code: string;
  in_stock: boolean;
}

export interface Tea {
  productID: string;
  title: string;
  description: string;
  brand: string;
  offers: Offer[];
  thumbnailURL: string;
  url: string;
  provider: string;
  version: string;
  type: string;
}

export interface Offer {
  title: string;
  offerID: number;
  sku: string;
  price: number;
  currencyCode: string;
  inStock: boolean;
}
