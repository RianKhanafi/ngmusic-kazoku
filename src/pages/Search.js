import { useState } from "react";
import Close from "../assets/x.svg";

function Search({ setOpenSearch, fetchMusic }) {
  const [search, setSearch] = useState("");

  const onSearch = () => {
    fetchMusic({ search });
    setOpenSearch(false);
  };
  return (
    <div className="searchcontainer">
      <div className="search-close">
        <img
          src={Close}
          width={12}
          height={12}
          alt="close"
          onClick={() => setOpenSearch(false)}
        />
      </div>
      <div className="searchscreen">
        <div>
          <div className="search-title">Search</div>
          <input
            className="input"
            placeholder="Artist / Album / Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="button-search" onClick={onSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
