import { PercentileCircle } from "components/Detail/PercentileCircle";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getImageUrl, TeaProduct } from "types/TeaProduct";
import "./ListRow.scss";

const getRandomStyle = () => {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;
  const left = rand(10, 80);
  const top = rand(0, 60);
  const size = rand(100, 400);
  return { size, top, left };
};

export const ListRow = ({ tea }: { tea: TeaProduct }) => {
  const [params, setParams] = useSearchParams();
  const { size, top, left } = useMemo(getRandomStyle, [tea.slug]);

  const { year, name, slug, style, thumbnailUrl, forms } = tea;
  const dpg = forms[0]?.percentiles?.dpg || 0;
  const detailSlug = params.get("detail");

  const setSelected = () =>
    setParams({
      detail: slug,
    });

  const isSelected = detailSlug === slug;
  const classes = `ListText ${isSelected ? "selected glow" : ""}`;
  const url = getImageUrl(thumbnailUrl, size);
  const imageStyle = {
    top: `${top}vh`,
    left: `${left}vw`,
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div className={classes} onClick={setSelected} id={slug}>
      <span className="year">{year} </span>
      <span className="name">{name} </span>
      <span className="dpg">
        {" "}
        <PercentileCircle percentile={dpg} />
      </span>
      <span className="style"> {style}</span>
      <img src={url} width={size} height={size} alt={name} style={imageStyle} />
    </div>
  );
};
