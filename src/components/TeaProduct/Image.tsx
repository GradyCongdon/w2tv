import "./Image.scss";

interface Props {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
}
export const Image = ({ src, alt, width, height }: Props) => {
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
      className="TeaImage responsive"
    />
  );
};
