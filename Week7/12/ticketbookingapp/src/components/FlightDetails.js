import React from 'react';

function FlightDetails() {
  const flights = [
    { id: 1, from: "Delhi", to: "Mumbai", time: "10:00 AM" },
    { id: 2, from: "Kolkata", to: "Chennai", time: "1:30 PM" },
    { id: 3, from: "Bangalore", to: "Hyderabad", time: "6:00 PM" }
  ];

  return (
    <div>
      <h3>Available Flights</h3>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.from} → {flight.to} at {flight.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightDetails;
