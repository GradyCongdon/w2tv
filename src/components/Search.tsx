import { useRecoilState, useRecoilValue } from "recoil";
import { searchState } from "states/search";
import { allTeasState } from "states/teas";
import Fuse from "fuse.js";
import "./Search.scss";
import { useSearchParams } from "react-router-dom";

export const Results = ({ results }: any) => {
  const [_, setSearchParams] = useSearchParams();
  const [_x, setSearchString] = useRecoilState(searchState);
  if (!results.length) return null;
  return (
    <div className="Results">
      {results.map((r: any) => (
        <button
          className="Result"
          onClick={() => {
            setSearchString("");
            setSearchParams({ detail: r.item.slug });
          }}
        >
          {r.item.year} {r.item.name}
        </button>
      ))}
    </div>
  );
};

export const Search = () => {
  const [searchString, setSearch] = useRecoilState(searchState);
  const teas = useRecoilValue(allTeasState);
  const onChange = (e: any) => {
    setSearch(e.currentTarget.value);
  };
  const options = {
    shouldSort: true,
    threshold: 0.2,
    includeScore: true,
    isCaseSensitive: false,
    ignoreLocation: true,
    keys: ["slug"],
  };
  const fuse = new Fuse(teas, options);
  const results = fuse.search(searchString.trim());
  const relevant = results.slice(0, 10).reverse();

  return (
    <div className="Search">
      <Results results={relevant} />
      <input
        className="SearchInput"
        type="text"
        onChange={onChange}
        value={searchString}
        placeholder="Search"
      />
    </div>
  );
};
