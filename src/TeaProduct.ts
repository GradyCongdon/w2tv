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

export enum TeaStyle {
    White = 'white',
    Green = 'green',
    Black = 'black',
    Raw = 'raw',
    Ripe = 'ripe',
    Oolong = 'oolong',
    Huangpian = 'huangpian',
    Unknown = 'unknown'
}

export interface TeaProduct {
    slug: string;
    year: number;
    style: TeaStyle;
    name: string;
    wrapper: Image;
    bing: Image;
    soup: Image;
    description: string;
    prices: Price[];
}
