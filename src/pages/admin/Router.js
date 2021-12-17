import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import CreateTourPage from "./tours/CreateTour";
import Dashboard from "./Dashboard";
import TicketsSummary from "./tickets/Summary";

function AdminRouter() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/tours")
      .then((resp) => resp.json())
      .then((data) => {
        console.log({ data });
        setTours(data);
      })
      .catch((error) => console.error("AdminRouter error", error));
  }, []);

  console.log({ tours });

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/admin/">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/tours/create">Create a Tour</Link>
            </li>
            <li>
              <Link to="/admin/tickets/summary">Tickets Summary</Link>
            </li>
            <li>
              <Link to="/">User Pages</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard tours={tours} />} />
        <Route
          path="/tours/create"
          element={<CreateTourPage tours={tours} setTours={setTours} />}
        />
        <Route path="tickets/summary" element={<TicketsSummary />} />
      </Routes>
    </>
  );
}

export default AdminRouter;
