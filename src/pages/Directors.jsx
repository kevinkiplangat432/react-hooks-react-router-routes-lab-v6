// pages/Directors.jsx
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => {
        setDirectors(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching directors:", error));
  }, []);

  const directorList = directors.map((director) => (
    <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie, index) => (
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
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {isLoading ? <p>Loading directors...</p> : directorList}
      </main>
    </>
  );
};

export default Directors;