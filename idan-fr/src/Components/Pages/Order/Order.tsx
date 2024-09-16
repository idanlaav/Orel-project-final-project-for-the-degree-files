import React, { useState } from "react";
import axios from "axios";
import urlService from "../../../Sevices/UrlService";
import notifyService from "../../../Sevices/NotificationService";
import "./Order.css"
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();
  const [numOfTickets, setNumOfTickets] = useState(0);
  // Getting the value nad the data from the browser local storage and save the elements in the project;
  //  movie id 
  const movieId = JSON.parse(localStorage.getItem("movieId") || "{}");
  //  user id 
  const userId = JSON.parse(localStorage.getItem("userId") || "{}");
  //  first name
  const firstName = JSON.parse(localStorage.getItem("firstName") || "{}");
  //  last name
  const lastName = JSON.parse(localStorage.getItem("lastName") || "{}");

  // Getting the number of the tickets that the user select
  const handleNumOfTicketsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNumOfTickets(parseInt(value));
  };

  // Create new order
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Sending data to the server side.
    axios
      .post(urlService.urls.orders, {
        numOfTickets: numOfTickets,
        userId: userId,
        movieId: movieId,
      })
      .then((response) => {
        alert(`Your order number is: ${response.data.orderId}`);
        // Delete the data from local storage to be ready to another user or another movie.
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("userId");
        localStorage.removeItem("movieId");
        // Navigate to home route
        navigate('/home');
        notifyService.success("Your order has been successfully received.");
      })
      .catch((error) => {
        console.error("Failed to submit ticket form:", error);
      });
  };

  return (
    <div className="Order">
      {firstName.length !== undefined &&
        <p className="Hello">Hello {firstName + " " + lastName}</p>}
      <h2>Order</h2>
      {movieId && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Number of Tickets: </label><br />
            <input
              type="number"
              name="numOfTickets"
              value={numOfTickets}
              onChange={handleNumOfTicketsChange}
              placeholder="Number of Tickets"
              min={1}
            />
            <button className="button-44" type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Order;
