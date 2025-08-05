import React from 'react';
import './App.css';

function App() {
  const officeSpaces = [
    {
      id: 1,
      name: "Workspace One",
      rent: 45000,
      address: "123 MG Road, Bengaluru",
      image: "https://via.placeholder.com/200x120.png?text=Office+1"
    },
    {
      id: 2,
      name: "Startup Hub",
      rent: 65000,
      address: "456 Park Street, Kolkata",
      image: "https://via.placeholder.com/200x120.png?text=Office+2"
    },
    {
      id: 3,
      name: "Corporate Nest",
      rent: 58000,
      address: "789 Anna Salai, Chennai",
      image: "https://via.placeholder.com/200x120.png?text=Office+3"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>
      
      {officeSpaces.map((office) => (
        <div key={office.id} className="office-card">
          <img src={office.image} alt={office.name} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

