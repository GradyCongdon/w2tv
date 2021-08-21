import { useEffect, useState } from "react";
import { TeaProduct } from "./TeaProduct";
import './TeaSlice.scss';

const TeaSlice = ({ tea, view }: any) => {
  const { year, name, size } = tea;
  const { src, alt, width, height } = tea[view];
  return (
    <span className={`TeaSliceWrapper ${view} ${size}`} >
      <img src={src} alt={alt} width={width} height={height} className="TeaSlice" />
      <div className="TeaSliceInfoWrapper">
        <div className="TeaSliceInfo glow">
          <span>
            {year}
          </span>
          <span>
            {name}
          </span>
        </div>
      </div>
    </span>
  );
};

interface SlicesProps {
  teas: TeaProduct[];
  view: string;
}

const getDefaultFilters = (view: string) => ({
  cake: true,
  brick: true,
  square: view === 'wrapper' ? false : true,
  mini: view === 'wrapper' ? false : true,
  bamboo: view !== 'soup' ? false : true,
} as any);

export const TeaSlices = ({ teas, view }: SlicesProps) => {
  const defaultFilters = getDefaultFilters(view);
  const [filteredSizes, setFilteredSizes] = useState(defaultFilters);
  useEffect(() => {
    setFilteredSizes(getDefaultFilters(view));
  }, [view])
  const TeaSlices = teas
    .filter(t => filteredSizes[t.size])
    .map(t => <TeaSlice key={t.slug} tea={t} view={view} />)
  const toggle = (size: any) => ({
    ...filteredSizes,
    [size]: !filteredSizes[size] as boolean
  });
  const Filters = Object.keys(defaultFilters).map(size => (
    <button
      key={size}
      className={`button toggle ${filteredSizes[size] ? 'checked' : ''}`}
      onClick={() => setFilteredSizes(toggle(size))}
    >
      {size}
    </button>
  ));
  return (
    <>
      <nav>
        {Filters}
      </nav>
      <div className="TeaSlices">
        {TeaSlices}
      </div>
    </>
  );
};
