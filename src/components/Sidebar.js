
const Sidebar = (props) => {
  const topAnime = props.topAnime;
  return (
    <aside>
      <nav>
        <h3>Popular Anime</h3>
        {topAnime.map((anime) => (
          <a href={anime.url} target="_blank" rel="noopener noreferrer" id={anime.mal_id}>
            {anime.rank}. {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
