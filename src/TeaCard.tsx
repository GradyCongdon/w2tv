import { useEffect, useState } from "react";
import { ViewSelectorLocal } from "./ViewSelector";
import { ViewState } from "./ViewState";
import { TeaProduct } from "./TeaProduct";
import { TeaImage } from "./TeaImage";

import './TeaCard.scss';
import { useRecoilState } from "recoil";
import { selectedSlugState } from "./selectedSlugState";

interface TeasProps {
    viewGlobal: ViewState,
    teas: TeaProduct[],
    whiteBalanced: boolean;
}
export const TeaCards = ({ teas, viewGlobal, whiteBalanced }: TeasProps) => {
    const $Teas = teas.map(tea => <TeaCard key={tea.slug} viewGlobal={viewGlobal} tea={tea} whiteBalanced={whiteBalanced} />);
    return (
        <section className="TeaCards">
            {$Teas}
        </section>
    );
}

export type Props = {
    tea: TeaProduct;
    viewGlobal: ViewState;
    whiteBalanced: boolean;
}

export const TeaCard = ({ tea, viewGlobal, whiteBalanced }: Props) => {
    const [selectedSlug, setSelectedSlug] = useRecoilState(selectedSlugState);
    // const isSelected = selectedSlug === tea.oSlug;
    const style = {
        //     boxShadow: isSelected ? 'var(--selected-shadow)' : '',
    }
    const onClick = () => setSelectedSlug(tea.oSlug);

    const [view, setView] = useState(viewGlobal || ViewState.Wrapper);
    useEffect(() => {
        setView(viewGlobal);
    }, [viewGlobal])
    const image = tea[view];
    return (
        <figure className="TeaCard" style={style} onClick={onClick}>
            <h3 className="year glow">{tea.year}</h3>
            <h2 className="name">{tea.name}</h2>
            <TeaImage image={image} whiteBalanced={whiteBalanced} />
            <ViewSelectorLocal view={view} setView={setView} />
        </figure>
    );
}