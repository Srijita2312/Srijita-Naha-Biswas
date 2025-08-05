// src/components/ListofPlayers.js
import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 60 },
    { name: 'Dhoni', score: 82 },
    { name: 'Hardik', score: 45 },
    { name: 'Bumrah', score: 70 },
    { name: 'KL Rahul', score: 90 },
    { name: 'Jadeja', score: 65 },
    { name: 'Gill', score: 88 },
    { name: 'Pant', score: 55 },
    { name: 'Surya', score: 99 },
    { name: 'Iyer', score: 78 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
