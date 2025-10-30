import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((data) => {
        setActors(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching actors:", error));
  }, []);

  const actorList = actors.map((actor) => (
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </article>
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {isLoading ? <p>Loading actors...</p> : actorList}
      </main>
    </>
  );
};

export default Actors;