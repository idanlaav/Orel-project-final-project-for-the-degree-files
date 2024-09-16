import { useEffect, useState } from "react";
import "./MovieList.css";
import { MovieModel } from "../../../Models/Movie";
import axios from "axios";
import MovieCard from "../../Shared/MovieCard/MovieCard";
import urlService from "../../../Sevices/UrlService";
import store from "../../../Redux/Store";
import { gotAllMoviesAction } from "../../../Redux/MovieAppState";
import notifyService from "../../../Sevices/NotificationService";
import { useDispatch } from "react-redux";

function MovieList(): JSX.Element {

    const dispatch = useDispatch();
    // All the movies that exist in the store (redux).
    const [movies, setMovies] = useState<MovieModel[]>(store.getState().moviesReducer.movies)
    // Few recommended movies that i pick.
    const [recommendedMovies, setRecommendedMovies] = useState<MovieModel[]>([])
    // Movie that the user selected.
    const [filterMovies, setFilterMovies] = useState<MovieModel[]>([]);
    // Genre selected by the user.
    const [currentSelectedGenre, setCurrentSelectedGenre] = useState<string>("");
    // Copy of the genre selected.
    const [selectedGenre, setSelectedGenre] = useState<string>("");
    const [isSearching, setIsSearching] = useState<boolean>(false);

    // Searching the genre that the user selected
    const handleSearch = () => {
        setIsSearching(true);
        setSelectedGenre(currentSelectedGenre)
    };

    // If the user selected to get them all i display the all movie instead the filter movies.
    useEffect(() => {
        if (isSearching) {
            if (selectedGenre === "All Genres") {
                setIsSearching(false)
            }
            else {
                setFilterMovies(movies.filter(movie => movie.genre === selectedGenre))
            }
            setCurrentSelectedGenre(selectedGenre)
        }

    }, [isSearching, selectedGenre]);

    //Mounting ~ componentDidMount
    useEffect(() => {
        // Getting the movies from the server only if they not exist already.
        if (movies?.length === 0) {
            axios
                .get<MovieModel[]>(urlService.urls.movies)
                .then((res) => {
                    let recommended = [];
                    // Set a recommended movies.
                    setMovies(res.data);
                    recommended.push(res.data[1])
                    recommended.push(res.data[4])
                    recommended.push(res.data[6])
                    setRecommendedMovies(recommended)
                    dispatch(gotAllMoviesAction(res.data));
                    notifyService.success("WOho!!!");
                })
                .catch((err) => notifyService.error(err));
        }
        // If the movies exist and the recommended movies length = 0 i pushing the recommended movies to a favorite element.
        if (movies?.length > 0 && recommendedMovies?.length === 0) {
            const currentMovies = store.getState().moviesReducer.movies;
            let favorite = [];
            favorite.push(currentMovies[1])
            favorite.push(currentMovies[4])
            favorite.push(currentMovies[6])
            setRecommendedMovies(favorite);
        }
    }, [recommendedMovies]);

    return (
        <div className="MovieList">
            {/* Select box to select genre filter */}
            <div className="Center">
                <select value={currentSelectedGenre} onChange={(e) => setCurrentSelectedGenre(e.target.value)}>
                    <option value="All Genres">All Genres</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="family">family</option>
                    <option value="horror">horror</option>
                    <option value="fantasy">fantasy</option>
                </select>
                <button className="button-44" onClick={handleSearch}>Search</button>
            </div>

            {/* If the user searching a filter genre it will display here. */}
            {isSearching === true &&
                <div>
                    {filterMovies.map(m =>
                        <MovieCard key={'movie ' + m.movieId} movie={m} />
                    )}
                </div>
            }
            {/* If the user not filter the genre it will display him a recommended movies that i selected and the all movies */}
            {isSearching === false &&
                <div>
                    <h2>Recommended Movies</h2>
                    <div className="displayList">
                        {recommendedMovies.map(m =>
                            <MovieCard key={'movie ' + m.movieId} movie={m} />
                        )}
                    </div>


                    <h2>Movie List</h2>
                    <div className="displayList">
                        {movies.map(m =>
                            <MovieCard key={'movie ' + m.movieId} movie={m} />
                        )}
                    </div>
                </div>}

        </div>

    );
}

export default MovieList;
