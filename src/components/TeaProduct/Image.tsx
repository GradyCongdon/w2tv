import { Image as ImageType } from "types/TeaProduct";
import './.scss';

interface Props {
    image: ImageType;
    whiteBalanced: boolean
}
export const Image = ({ image, whiteBalanced }: Props) => {
    const { type, src: srcOriginal, srcWhiteBalanced, alt, width, height } = image;
    const src = type === 'soup' && whiteBalanced ? srcWhiteBalanced : srcOriginal;
    return (
        <img src={src} alt={alt} width={width} height={height} className="TeaImage" />
    );
};
