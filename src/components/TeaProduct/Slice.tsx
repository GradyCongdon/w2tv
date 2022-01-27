import { useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
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
  const size = 400;

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

export interface SlicesProps {
  teas: TeaProduct[];
}

export const getDefaultFilters = (view: string) =>
  ({
    cake: true,
    brick: view === "wrapper" ? false : true,
    square: view === "wrapper" ? false : true,
    mini: view === "wrapper" ? false : true,
    ball: view === "wrapper" ? false : true,
    bamboo: view !== "soup" ? false : true,
  } as any);
