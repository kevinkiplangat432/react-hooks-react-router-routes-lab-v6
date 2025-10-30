import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  // Get the 'id' parameter from the URL
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Movie not found");
        return res.json();
      })
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
        setMovie(null); // Ensure movie is null on error
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <>
        <header><NavBar /></header>
        <main><p>Loading movie details...</p></main>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <header><NavBar /></header>
        <main><h1>Movie Not Found</h1></main>
      </>
    );
  }

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index} style={{marginRight: '10px'}}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;