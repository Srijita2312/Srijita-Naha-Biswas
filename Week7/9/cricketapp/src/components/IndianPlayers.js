// src/components/IndianPlayers.js
import React from 'react';

function IndianPlayers() {
  const allPlayers = ["Virat", "Rohit", "Dhoni", "Hardik", "Bumrah", "KL", "Jadeja", "Gill", "Pant", "Surya", "Iyer"];

  const oddTeam = allPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 !== 0);

  const [player1, player2, player3, ...rest] = oddTeam;

  const T20players = ["Virat", "Rohit", "Surya"];
  const RanjiTrophy = ["Pujara", "Rahane", "Karun Nair"];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}

export default IndianPlayers;
