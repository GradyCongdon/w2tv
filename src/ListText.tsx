import { ArrayProps, EntryProps } from './TeaProduct';
import './ListText.scss';
import { useRecoilState } from 'recoil';
import { selectedSlugState } from './selectedSlugState';

const ListText = ({ tea }: EntryProps) => {
  const { year, name, style } = tea;

  const [selectedSlug, setSelectedSlug] = useRecoilState(selectedSlugState);
  const onClick = () => setSelectedSlug(tea.oSlug);
  const isSelected = selectedSlug === tea.oSlug;
  const classes = `ListText ${isSelected ? 'selected' : ''}`

  return (
    <tr className={classes} onClick={onClick}>
      <td className="year">{year} </td>
      <td className="name">{name} </td>
      <td className="style"> {style}</td>
    </tr>
  );

};

export const List = ({ teas }: ArrayProps) => {
  return (
    <table className="list">
      <tbody>
        {teas.map(t => <ListText key={t.slug} tea={t} />)}
      </tbody>
    </table>
  );
};
