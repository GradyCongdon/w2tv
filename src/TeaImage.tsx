import { Image } from "./TeaProduct";
import './TeaImage.scss';

interface Props {
    image: Image;
    whiteBalanced: boolean
}
export const TeaImage = ({ image, whiteBalanced }: Props) => {
    const { type, src: srcOriginal, srcWhiteBalanced, alt, width, height } = image;
    const src = type === 'soup' && whiteBalanced ? srcWhiteBalanced : srcOriginal;
    return (
        <img src={src} alt={alt} width={width} height={height} className="TeaImage" />
    );
};
