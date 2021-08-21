import { Image } from "./TeaProduct";
import './TeaImage.scss';

interface Props {
    image: Image;
}
export const TeaImage = ({ image }: Props) => {
    const { src, alt, width, height } = image;
    return (
        <img src={src} alt={alt} width={width} height={height} className="TeaImage" />
    );
};
