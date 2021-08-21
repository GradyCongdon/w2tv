import { ArrayProps, EntryProps } from './TeaProduct';
import './ListText.scss';

const ListText = ({ tea }: EntryProps) => {
  const { year, name, style } = tea;
  return (
    <tr className="ListText">
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
