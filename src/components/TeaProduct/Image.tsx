import { useState } from "react";
import "./Image.scss";

interface Props {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
}
export const ImagePreLoader = ({ src, alt, width, height }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  if (!src) {
    return (
      <div className="TeaImage placeholder responsive">
        <div className="circle"></div>
      </div>
    );
  }
  return (
    <>
      <div
        className={`TeaImage placeholder responsive ${
          isLoaded ? "loaded" : "loading"
        } `}
      >
        <div className="circle"></div>
      </div>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`TeaImage responsive ${isLoaded ? "loaded" : "loading"} `}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};
export const Image = ({ src, alt, width, height }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  if (!src) {
    return (
      <div className="TeaImage placeholder responsive">
        <div className="circle"></div>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`TeaImage responsive ${isLoaded ? "loaded" : "loading"} `}
      onLoad={() => setIsLoaded(true)}
    />
  );
};
