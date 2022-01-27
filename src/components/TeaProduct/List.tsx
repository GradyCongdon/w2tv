import { useRecoilState } from "recoil";
import { selectedSlugState } from "states/selectedSlug";
import { EntryProps } from "types/TeaProduct";
import "./List.scss";

export const TeaTableRow = ({ tea }: EntryProps) => {
  const { year, name, style, oSlug } = tea;

  const [selectedSlug, setSelectedSlug] = useRecoilState(selectedSlugState);
  const onClick = () => setSelectedSlug(oSlug);
  const isSelected = selectedSlug === oSlug;
  const classes = `ListText ${isSelected ? "selected" : ""}`;

  return (
    <tr className={classes} onClick={onClick} id={oSlug}>
      <td className="year">{year} </td>
      <td className="name">{name} </td>
      <td className="style"> {style}</td>
    </tr>
  );
};
