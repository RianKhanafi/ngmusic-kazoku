import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

function SplashScreen({ props: { fetchMusic } }) {
  const [search, setSearch] = useState("");

  const onSearch = () => {
    fetchMusic({ search });
  };

  return (
    <div className="splashscreen">
      <div>
        <img src={Logo} width={72.2} height={83.8} />
      </div>
      <div className="splashsearch">
        <input
          className="input"
          placeholder="Artist / Album / Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="button-secondary" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SplashScreen;
