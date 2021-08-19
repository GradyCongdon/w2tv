import { Dispatch, SetStateAction } from "react";
import { ViewState } from "./ViewState";
import './ViewSelector.css';

interface Props {
    view: ViewState;
    setView: Dispatch<SetStateAction<ViewState>>
    global?: boolean
}

export const ViewSelector = ({ view, setView, global = false }: Props) => {
    const fade = global ? '' : 'fade'
    const g = global ? 'global' : ''
    return (
        <nav className={`view-selector ${fade} ${g}`}>

            <button className="button--view"
                onClick={() => setView(ViewState.Wrapper)}
                disabled={view === ViewState.Wrapper}>W</button>
            <button className="button--view"
                onClick={() => setView(ViewState.Bing)}
                disabled={view === ViewState.Bing}>B</button>
            <button className="button--view"
                onClick={() => setView(ViewState.Soup)}
                disabled={view === ViewState.Soup}>S</button>
        </nav >);
};
