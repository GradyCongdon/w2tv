import { useRecoilState } from "recoil";
import { View, viewState } from "states/view";
import { whiteBalancedState } from "states/whiteBalanced";
import { capitalize } from "utils/capitalize";
import { Toggle } from "../Toggle";
import "./View.scss";

const WhiteBalance = () => {
  const [isWhiteBalanced, setIsWhiteBalanced] =
    useRecoilState(whiteBalancedState);
  return (
    <Toggle
      value={isWhiteBalanced}
      set={setIsWhiteBalanced}
      label="wb"
      classes="WhiteBalance"
    />
  );
};

const label = (view: View) => capitalize(view[0]);

const Button = ({ view }: { view: View }) => {
  const [currentView, setView] = useRecoilState(viewState);
  return (
    <button
      className={`button radio button--${view}`}
      onClick={() => setView(view)}
      disabled={currentView === view}
    >
      {label(view)}
    </button>
  );
};

export const ViewSelector = () => {
  const [currentView] = useRecoilState(viewState);
  return (
    <nav className={`view-selector global`}>
      <Button view="wrapper" />
      <Button view="bing" />
      <div className={`view--white-balanced ${currentView}`}>
        <WhiteBalance />
        <Button view="soup" />
      </div>
    </nav>
  );
};
