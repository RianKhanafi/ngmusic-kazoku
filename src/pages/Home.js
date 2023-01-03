import Menu from "../assets/menu.svg";
import Name from "../assets/ngmusic.svg";
import Search from "../assets/search.svg";
import Currency from "../assets/currency-dollar.svg";
import React, { useState } from "react";
import SearchScreen from "./Search";
import { STATUS, useMusic } from "../modules/music/hook";
import Card from "../components/card";

function Home({ props: { status, searchParams, data, fetchMusic } }) {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <React.Fragment>
      <div className="home">
        {openSearch && (
          <SearchScreen setOpenSearch={setOpenSearch} fetchMusic={fetchMusic} />
        )}
        <header>
          <img src={Menu} width={14} height={11.4} />
          <img src={Name} width={72.2} height={15.8} />
          <img
            src={Search}
            width={14}
            height={14}
            alt="search"
            onClick={() => setOpenSearch(true)}
            className="search-icon"
          />
        </header>

        <section>
          <div className="search-text">
            <span>Search result for :</span>
            <span>{searchParams?.search}</span>
          </div>
        </section>

        <section className="result-container">
          {status === STATUS.loading ? (
            <div className="loading">Loading...</div>
          ) : (
            data?.results?.map((elm, i) => (
              <Card
                key={i}
                img={elm.artworkUrl100}
                artistName={elm.artistName}
                primaryGenreName={elm.primaryGenreName}
                collectionPrice={elm.collectionPrice}
                trackCensoredName={elm.trackCensoredName}
                src={elm?.previewUrl}
              />
            ))
          )}

          <div className="load-more">
            <button
              className="button-loadmore"
              onClick={() => {
                fetchMusic({ loadMore: true });
              }}
            >
              Load More
            </button>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Home;
