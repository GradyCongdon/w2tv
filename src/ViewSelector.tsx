import { Dispatch, SetStateAction } from "react";
import { ViewState } from "./ViewState";
import { Toggle } from "./Toggle";
import './ViewSelector.scss';

interface WhiteBalanceProps {
    whiteBalanced: boolean;
    setWhiteBalanced: Dispatch<SetStateAction<boolean>>;
}
const WhiteBalance = ({ whiteBalanced, setWhiteBalanced }: WhiteBalanceProps) => (
    <Toggle value={whiteBalanced} set={setWhiteBalanced} label="wb" classes="WhiteBalance" />
);


interface ViewProps {
    view: ViewState;
    setView: Dispatch<SetStateAction<ViewState>>;
}

const WrapperButton = ({ view, setView }: ViewProps) => (
    <button className="button radio button--view"
        onClick={() => setView(ViewState.Wrapper)}
        disabled={view === ViewState.Wrapper}>W</button>
);

const BingButton = ({ view, setView }: ViewProps) => (
    <button className="button radio button--view"
        onClick={() => setView(ViewState.Bing)}
        disabled={view === ViewState.Bing}>B</button>
);

const SoupButton = ({ view, setView }: ViewProps) => (
    <button className="button radio button--view"
        onClick={() => setView(ViewState.Soup)}
        disabled={view === ViewState.Soup}>S</button>
);

export const ViewSelectorLocal = ({ view, setView }: ViewProps) => (
    <nav className={`view-selector fade`}>
        <WrapperButton view={view} setView={setView} />
        <BingButton view={view} setView={setView} />
        <SoupButton view={view} setView={setView} />
    </nav>
);

interface ViewSelectorGlobalProps {
    view: ViewState;
    setView: Dispatch<SetStateAction<ViewState>>;
    whiteBalanced: boolean;
    setWhiteBalanced: Dispatch<SetStateAction<boolean>>;
}

export const ViewSelectorGlobal = ({ view, setView, whiteBalanced, setWhiteBalanced }: ViewSelectorGlobalProps) => (
    <nav className={`view-selector global`}>
        <WrapperButton view={view} setView={setView} />
        <BingButton view={view} setView={setView} />
        <div className={`view--white-balanced ${view}`} >
            <WhiteBalance whiteBalanced={whiteBalanced} setWhiteBalanced={setWhiteBalanced} />
            <SoupButton view={view} setView={setView} />
        </div>
    </nav >
);