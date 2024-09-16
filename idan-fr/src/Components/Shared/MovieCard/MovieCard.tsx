import { useNavigate } from "react-router-dom";
import { MovieModel } from "../../../Models/Movie";
import "./MovieCard.css";
interface MovieCardProps {
    movie: MovieModel;
}
function MovieCard(props: MovieCardProps): JSX.Element {
    const navigate = useNavigate();

    function orderTickets() {
        const movieId = props.movie.movieId
        // The user select a movie and the id number save in the local storage browser data with the name movieId
        localStorage.setItem("movieId", JSON.stringify(movieId));
        // navigate the user to another route
        navigate('/login');
    }


    return (
        <div className="MovieCard box">
            {/* Order button */}
            <div className="FlexRight">
                <button className="OrderButton button-44" onClick={orderTickets}>Order</button>
            </div>
            {/* Image of the movie */}
            <img src={require(`../../../Assets/Images/${props.movie.image}`)} alt="movie" />
            <div className="Title">{props.movie.title}</div>
            <div className="Genre">{props.movie.genre}</div>
            <div className="Description">{props.movie.description}</div>
        </div>
    );
}

export default MovieCard;
