import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const movieCards = movies.map((movie) => (
    <MovieCard key={movie.id} title={movie.title} id={movie.id} />
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {/* Info goes here! */}
        {isLoading ? <p>Loading movies...</p> : movieCards}
      </main>
    </>
  );
};

export default Home;