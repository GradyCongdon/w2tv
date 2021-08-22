export type ImageType = 'wrapper' | 'bing' | 'soup';

export interface Image {
    type: ImageType
    src: string;
    srcWhiteBalanced: string;
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

export enum TeaSize {
    Cake = 'cake',
    Mini = 'mini',
    Bamboo = 'bamboo',
    Square = 'square',
    Brick = 'brick',
    Ball = 'ball',
}

export interface TeaProduct {
    slug: string;
    year: number;
    style: TeaStyle;
    name: string;
    size: TeaSize;
    wrapper: Image;
    bing: Image;
    soup: Image;
    description: string;
    prices: Price[];
}


export interface EntryProps {
    tea: TeaProduct,
}

export interface ArrayProps {
    teas: TeaProduct[];
}