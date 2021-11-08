const AnimeCard = (props) => {
    const anime=props.anime;
    const id=props.id;
    return(
        <article className="anime-card">
            <a href={anime.url} target="_blank" rel="noopener noreferrer">
                <figure>
                    <img 
                        src={anime.image_url}
                        alt="Anime-img"
                    />
                </figure>
                <h3>{anime.title}</h3>
            </a>
        </article>
    )
}

export default AnimeCard