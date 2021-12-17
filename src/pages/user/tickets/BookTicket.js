import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function BookTicket() {
  const [ticketToCreat, setTicketToCreat] = useState({
    tourId: null,
    email: "",
    quantity: 0,
    date: "",
  });

  const [submitted, setSubmitted] = useState();
  useEffect(() => {
    if (submitted) {
      const fetchOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ticketToCreat),
      };
      fetch("http://localhost:3030/tickets", fetchOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("ticketss", data);
        });
    }
  });
  const location = useLocation();
  function handleSubmit(event) {
    event.preventDefault();

    setTicketToCreat({ ...ticketToCreat, tourId: location.state.tour.id });
    setSubmitted();
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setTicketToCreat({ ...ticketToCreat, [name]: value });
  }

  return (
    <form class="form" onSubmit={handleSubmit}>
      <label for="email">Email</label>
      <input type="email" id="email" onChange={handleChange} />
      <label for="quantity">Quantity</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        onchange={handleChange}
      />
    </form>
  );
}

export default BookTicket;
