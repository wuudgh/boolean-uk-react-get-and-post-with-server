import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ToursList() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/tours")
      .then((resp) => resp.json())
      .then((data) => {
        console.log({ data });
        setTours(data);
      })
      .catch((error) => console.error("UserRouter error", error));
  }, []);
  return (
    <ul>
      {tours.map((tour, index) => {
        const { name, price } = tour;

        return (
          <li key={index}>
            <h3>{name}</h3>
            <p>Price: £{price}</p>
            <Link to={`/tours/${tour.id}/book`} state={{ tour }}>
              Book Tour
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ToursList;
