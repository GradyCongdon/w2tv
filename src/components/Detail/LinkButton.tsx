export const LinkButton = ({ url }: { url: string }) => {
  return (
    <a className="DetailButton Link" href={url}>
      <span className="value">🔗</span>
    </a>
  );
};
