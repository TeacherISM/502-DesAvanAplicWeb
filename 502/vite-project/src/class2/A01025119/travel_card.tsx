import React, { useState } from 'react';
import InputField from './Input.tsx';
import Button from './Button.tsx';
import './travel_design.css';

const TravelRequest: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = () => {
    const travelData = {
      destination,
      startDate,
      endDate,
      purpose,
    };
    console.log('Travel Request:', travelData);
    alert('Travel request submitted!');
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Travel Request Form</h1>

        <InputField
          type="text"
          name="destination"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <InputField
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <InputField
          type="date"
          name="endDate"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <textarea
          className="form-input"
          name="purpose"
          placeholder="Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />

        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default TravelRequest;
