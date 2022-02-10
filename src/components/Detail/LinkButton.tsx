import { ExternalLink } from "components/Icons";
import "./LinkButton.scss";

export const LinkButton = ({ url }: { url: string }) => {
  return (
    <a className="DetailButton Link" href={url}>
      <ExternalLink />
    </a>
  );
};
