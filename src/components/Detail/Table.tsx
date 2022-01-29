import "./Table.scss";

type Props = {
  headings: string[];
};

export const TableHeading = ({ headings }: Props) => (
  <div className="TableHeading table table--fit">
    {headings.map((h) => (
      <span key={h}>{h}</span>
    ))}
  </div>
);
