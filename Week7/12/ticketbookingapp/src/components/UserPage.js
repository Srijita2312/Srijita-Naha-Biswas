import React from 'react';
import FlightDetails from './FlightDetails';

function UserPage() {
  const handleBooking = () => {
    alert("Ticket booked successfully!");
  };

  return (
    <div>
      <h2>Welcome, User!</h2>
      <FlightDetails />
      <button onClick={handleBooking}>Book Ticket</button>
    </div>
  );
}

export default UserPage;
