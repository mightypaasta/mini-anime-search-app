import AnimeCard from "./AnimeCard";

const MainContent = (props) => {
  const searchHandler = props.searchHandler;
  const search = props.search;
  const setSearch = props.setSearch;
  const animeList = props.animeList;
  //   const [searchInput, setSearchInput] = useState("");
  return (
    <main>
      <div className="main-head">
        <form
          className="search-box"
          onSubmit={(e) => {
            searchHandler(e);
          }}
        >
          <input
            type="search"
            placeholder="Search..."
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="anime-list">
        {animeList ? (
          animeList.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))
        ) : (
          <h1>Error 404!! NOT FOUND</h1>
        )}
      </div>
    </main>
  );
};

export default MainContent;
