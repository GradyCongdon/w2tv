import { useSearchParams } from "react-router-dom";
import { IMAGE_SIZE } from "types/const";
import { getImageUrl, ImageSubject, TeaProduct } from "types/TeaProduct";
import "./Slice.scss";

interface TeaSliceProps {
  tea: TeaProduct;
  subject: ImageSubject;
}

export const Slice = ({ tea, subject }: TeaSliceProps) => {
  const [params, setParams] = useSearchParams();
  const detailSlug = params.get("detail");

  const { year, name, slug } = tea;
  const setSelected = () =>
    setParams({
      detail: slug,
    });

  const imageUrl = tea.images[subject];
  const size = IMAGE_SIZE;

  const isSelected = detailSlug === slug;
  const classes = `TeaSliceWrapper ${
    isSelected ? "selected" : ""
  } ${subject} ${size}`;

  return (
    <span className={classes} onClick={setSelected} id={slug}>
      {imageUrl && (
        <img
          src={getImageUrl(imageUrl, size)}
          alt={name}
          width={size}
          height={size}
          className="TeaSlice"
          loading="lazy"
        />
      )}
      <div className="TeaSliceInfoWrapper">
        <div className="TeaSliceInfo glow">
          <span>{year}</span>
          <span>{name}</span>
        </div>
      </div>
    </span>
  );
};
