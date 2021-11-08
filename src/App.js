import { useState, useEffect } from "react";

import "./assets/css/main.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    );
    const data = await res.json();
    setTopAnime(data.top.slice(0, 5));
    // console.log(data);
  };

  const getAnimeList = async (query) => {
    const res = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    );
    console.log(res.status);
    const data = res.status === 404 ? [] : await res.json();
    console.log(data.results);
    setAnimeList(data.results);
    // console.log(data);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("form submitted!!");
    console.log(search);
    getAnimeList(search);
    setSearch("");
  };

  useEffect(() => {
    getTopAnime();
    getAnimeList("naruto");
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          searchHandler={searchHandler}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        ></MainContent>
      </div>
    </div>
  );
}

export default App;
