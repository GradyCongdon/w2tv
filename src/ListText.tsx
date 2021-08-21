import { ArrayProps, EntryProps } from './TeaProduct';
import './ListText.scss';

const ListText = ({ tea }: EntryProps) => {
  const { year, name, style } = tea;
  return (
    <div className="ListText">
      <span className="year">{year} </span>
      <span className="name">{name} </span>
      <span className="dots"></span>
      <span className="style"> {style}</span>
    </div>
  );

};

export const List = ({ teas }: ArrayProps) => {
  return (
    <div className="list">
      {teas.map(t => <ListText key={t.slug} tea={t} />)}
    </div>
  );
};
