import { Dispatch, SetStateAction } from "react";
import { ViewState } from "./ViewState";
import './ViewSelector.css';

interface Props {
    view: ViewState;
    setView: Dispatch<SetStateAction<ViewState>>
}

export const ViewSelector = ({ view, setView }: Props) => {
    return (
        <nav className="view-selector">

            <button
                onClick={() => setView(ViewState.Wrapper)}
                disabled={view === ViewState.Wrapper}>W</button>
            <button
                onClick={() => setView(ViewState.Bing)}
                disabled={view === ViewState.Bing}>B</button>
            <button
                onClick={() => setView(ViewState.Soup)}
                disabled={view === ViewState.Soup}>S</button>
        </nav >);
};
