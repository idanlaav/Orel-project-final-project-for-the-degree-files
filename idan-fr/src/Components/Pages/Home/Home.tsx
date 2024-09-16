import MovieList from "../MovieList/MovieList";

function Home(): JSX.Element {
    // If the route is different from order we remove the First name from the local storage and then the user will login again and it not displaying an hello message.
    if(window.location.href !== "http://localhost:3000/order"){
        localStorage.removeItem("firstName");
    }
    
    
    return (
        // Displaying the movie list component
        <div className="Home">
			<MovieList />
        </div>
    );
}

export default Home;
