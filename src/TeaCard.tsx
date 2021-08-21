import { useEffect, useState } from "react";
import { ViewSelector } from "./ViewSelector";
import { ViewState } from "./ViewState";
import { TeaProduct } from "./TeaProduct";
import { TeaImage } from "./TeaImage";

import './TeaCard.scss';

interface TeasProps {
    viewGlobal: ViewState,
    teas: TeaProduct[],
}
export const TeaCards = ({ teas, viewGlobal }: TeasProps) => {
    const $Teas = teas.map(tea => <TeaCard key={tea.slug} viewGlobal={viewGlobal} tea={tea} />);
    return (
        <section className="TeaCards">
            {$Teas}
        </section>
    );
}

export type Props = {
    tea: TeaProduct;
    viewGlobal: ViewState
}

export const TeaCard = ({ tea, viewGlobal }: Props) => {
    const [view, setView] = useState(viewGlobal || ViewState.Wrapper);
    useEffect(() => {
        setView(viewGlobal);
    }, [viewGlobal])
    const image = tea[view];
    return (
        <figure className="TeaCard">
            <h3 className="year glow">{tea.year}</h3>
            <h2 className="name">{tea.name}</h2>
            <TeaImage image={image} />
            <ViewSelector view={view} setView={setView} />
        </figure>
    );
}