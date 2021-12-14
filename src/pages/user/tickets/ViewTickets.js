import { useEffect, useState } from "react"

function ViewTickets() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch("http://localhost:3030/tickets")
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])

  return (
    <ul>
      {tickets.map((ticket, index) => {
        const { email, quantity, date, tour } = ticket

        return (
          <li key={index}>
            <h3>{tour.name}</h3>
            <p>Email: {email}</p>
            <p>Quantity: {quantity}</p>
            <p>Date: {date}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default ViewTickets
