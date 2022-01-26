interface Props {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
}
export const Image = ({ src, alt, width, height }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="TeaImage"
    />
  );
};
