import { Link, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Toggle } from "components/Toggle";
import { whiteBalancedState } from "states/whiteBalanced";
import { ImageSubject } from "types/TeaProduct";
import { capitalize } from "utils/capitalize";
import "./Subject.scss";

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

const label = (subject: ImageSubject) => capitalize(subject[0]);

const Button = ({ subject }: { subject: ImageSubject }) => {
  // const { subject: currentSubject} = useParams();

  return (
    <Link
      className={`button radio button--subject`}
      to={subject}
      // disabled={currentSubject === subject}
    >
      {label(subject)}
    </Link>
  );
};

export const SubjectSelector = () => {
  const { subject: currentSubject } = useParams();
  return (
    <nav className={`subject-selector global`}>
      <Button subject="wrapperTop" />
      <Button subject="teaTop" />
      <div className={`subject--white-balanced ${currentSubject}`}>
        <WhiteBalance />
        <Button subject="soup" />
      </div>
    </nav>
  );
};
