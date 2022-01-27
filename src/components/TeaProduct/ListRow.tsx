import { useSearchParams } from "react-router-dom";
import { TeaProduct } from "types/TeaProduct";
import "./ListRow.scss";

export const ListRow = ({ tea }: { tea: TeaProduct }) => {
  const [params, setParams] = useSearchParams();

  const { year, name, style, slug } = tea;
  const detailSlug = params.get("detail");

  const setSelected = () =>
    setParams({
      detail: slug,
    });

  const isSelected = detailSlug === slug;
  const classes = `ListText ${isSelected ? "selected" : ""}`;

  return (
    <tr className={classes} onClick={setSelected} id={slug}>
      <td className="year">{year} </td>
      <td className="name">{name} </td>
      <td className="style"> {style}</td>
    </tr>
  );
};
