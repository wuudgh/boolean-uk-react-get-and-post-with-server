import { useState, useEffect } from "react";
import TicketsTable from "./components/TicketsTable";

function TicketsSummary() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/tickets")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("my tickets", data);
        setTickets(data);
      });
  }, []);

  console.log({ tickets });

  return (
    <main>
      <h1>Tickets Summary</h1>
      <TicketsTable tickets={tickets} />
    </main>
  );
}

export default TicketsSummary;
