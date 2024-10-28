// src/components/DriverStandings.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import DriverStandings from './DriverStandings';
import '@testing-library/jest-dom';

// Mock axios and SVG inline
jest.mock('axios');
jest.mock('../logo/RedBullLogo.svg', () => 'svg-mock');

describe('DriverStandings Component', () => {
  const mockData = [
    { position: 1, name: 'Max Verstappen', constructor: 'Red Bull Racing', points: 400 },
    { position: 2, name: 'Lewis Hamilton', constructor: 'Mercedes', points: 350 },
  ];

  beforeEach(() => {
    axios.get.mockClear();
  });

  it('displays loading indicator initially', () => {
    render(<DriverStandings />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('fetches and displays driver standings data', async () => {
    axios.get.mockResolvedValueOnce({ data: mockData });
  
    render(<DriverStandings />);
  
    // Wait for data to be displayed
    await screen.findByText(/Max Verstappen/i);
    expect(screen.getByText(/Lewis Hamilton/i)).toBeInTheDocument();
  });

  it('displays an error message on fetch failure', async () => {
    axios.get.mockRejectedValueOnce(new Error('Fetch failed'));
    render(<DriverStandings />);

    await screen.findByText(/Failed to fetch driver standings/i);
  });
});
