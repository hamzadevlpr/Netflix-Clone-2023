import React, { useEffect, useState } from 'react';

const Videos = () => {
  const apiKey = "ca258fa0adb338022b74848eb9dade0a";
  const movieId = 829799;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!movie) {
    return null; // You can show a loading spinner or a message while fetching data
  }

  const backgroundStyle = {
    minHeight: '100%',
    background: `linear-gradient(-120deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  };


  return (
    <div className="movie-page" style={backgroundStyle}>
      <div className="gradient-overlay">
        <div className="movie-poster">
          <h1>Paradise City</h1>
          <div className="d-flex gap-2 w-100">
            <button className="btn-play btnClr" style={buttonStyle}>
              Play
            </button>
            <button className="btn-detail" style={buttonStyle}>
              More Detail
            </button>
          </div>
          <p>Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.</p>
        </div>
      </div>
    </div>
  );
};
const buttonStyle = {
  marginTop: "-10px",
  background: "#E50914",
  color: "white",
  fontSize: "15px",
  fontWeight: "bolder",
  borderRadius: "5px",
  padding: " 5px 15px",
  textDecoration: "none",
};
export default Videos;
