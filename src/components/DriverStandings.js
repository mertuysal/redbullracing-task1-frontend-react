import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DriverStandings.css';
import RedBullLogo from '../logo/RedBullLogo.svg';

function DriverStandings() {
  const [standings, setStandings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState('2024'); // Default season

  const seasons = [];
  for (let year = 2024; year >= 1950; year--) {
    seasons.push(year.toString());
  }

  useEffect(() => {
    const fetchStandings = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/drivers/${season}`);
        setStandings(response.data);
      } catch (err) {
        setError('Failed to fetch driver standings.');
      }
      setLoading(false);
    };

    fetchStandings();
  }, [season]);

  const handleSeasonChange = (e) => {
    setSeason(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="driver-standings-container">
      <div className="header-section">
        <img src={RedBullLogo} className="logo" alt="Red Bull Logo" />
        <h1>{season} Driver Standings</h1>
        <select value={season} onChange={handleSeasonChange} className="season-select">
          {seasons.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {standings.length === 0 ? (
        <p>Data is not available for the selected season.</p>
      ) : (
        <table className="standings-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Driver name</th>
              <th>Constructor name</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((driver, index) => (
              <tr key={driver.position} className={index % 2 === 0 ? 'even' : 'odd'}>
                <td>{driver.position}</td>
                <td>{driver.name}</td>
                <td>{driver.constructor}</td>
                <td>{driver.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DriverStandings;