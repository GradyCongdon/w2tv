export interface Image {
    src: string;
    alt: string;
    width: number;
    height: number;
}
interface Price {
    price: number;
    mass: number;
    amount: number;
}
export interface TeaProduct {
    slug: string;
    year: number;
    name: string;
    wrapper: Image;
    bing: Image;
    soup: Image;
    description: string;
    prices: Price[];
}
