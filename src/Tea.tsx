import { useEffect, useState } from "react";
import { ViewSelector } from "./ViewSelector";
import { ViewState } from "./ViewState";
import './Tea.css';
import { TeaProduct, Image } from "./TeaProduct";

interface TeasProps {
    viewGlobal: ViewState,
    teas: TeaProduct[],
}
export const Teas = ({ teas, viewGlobal }: TeasProps) => {
    const $Teas = teas.map(tea => <Tea key={tea.slug} viewGlobal={viewGlobal} tea={tea} />);
    return (
        <section className="teas">
            {$Teas}
        </section>
    );
}

export type Props = {
    tea: TeaProduct;
    viewGlobal: ViewState
}

interface ViewImageProps {
    image: Image;
}

const ViewImage = ({ image }: ViewImageProps) => {
    const { src, alt, width, height } = image;
    return (
        <img src={src} alt={alt} width={width} height={height} className="ViewImage" />
    );
}


export const Tea = ({ tea, viewGlobal }: Props) => {
    const [view, setView] = useState(viewGlobal || ViewState.Wrapper);
    useEffect(() => {
        setView(viewGlobal);
    }, [viewGlobal])
    const image = tea[view];
    return (
        <figure className="tea">
            <h2 className="year">{tea.year}</h2>
            <h1 className="name">{tea.name}</h1>
            <ViewImage image={image} />
            <ViewSelector view={view} setView={setView} />
        </figure>
    );
}