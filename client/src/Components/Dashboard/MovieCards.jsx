import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const MovieCards = () => {
    const [movies, setMovies] = useState([]);
    const [hoveredIndexes, setHoveredIndexes] = useState([]);

    useEffect(() => {
        const apiKey = "ca258fa0adb338022b74848eb9dade0a"; // Replace with your API key
        const randomPage = Math.floor(Math.random() * 100); // Get a random page (adjust the range as needed)
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${randomPage}&sort_by=popularity.desc`;

        axios.get(url)
            .then((response) => {
                setMovies(response.data.results);
                // Initialize the hover state for each movie card to false
                setHoveredIndexes(Array(response.data.results.length).fill(false));
                console.log(response.data.results)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleMouseEnter = (index) => {
        // Update the hover state for the specific movie card
        const newHoveredIndexes = [...hoveredIndexes];
        newHoveredIndexes[index] = true;
        setHoveredIndexes(newHoveredIndexes);
    };

    const handleMouseLeave = (index) => {
        // Update the hover state for the specific movie card
        const newHoveredIndexes = [...hoveredIndexes];
        newHoveredIndexes[index] = false;
        setHoveredIndexes(newHoveredIndexes);
    };

    return (
        <>
            <h1 className="text-4xl font-bold movie-title pl-10 pt-5 overflow-hidden">Random Movies</h1>
            <div className="slider">
                {movies.map((movie, index) => (
                    <figure
                        key={index}
                        className={`snip1577 rounded-xl  ${hoveredIndexes[index] ? 'hover' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={`Slide ${index + 1}`}
                        />
                        <figcaption>
                            <h3 className=''>{movie.title}</h3>
                            <div className="flex gap-1 items-center h4">
                                <div className="flex items-center justify-center gap-2">
                                    <img className='opacity-100' width="30" height="30" src="https://img.icons8.com/color/30/imdb.png" alt="imdb" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal">{movie.vote_average.toFixed(1)} / 10</span>
                                </div>
                            </div>

                        </figcaption>
                        <a href="#" />
                    </figure>
                ))}
            </div>
        </>
    );
};

export default MovieCards;
