import React, { useState, useEffect, ChangeEvent } from 'react';
import InputField from '../../class2/A01025119/Input.tsx';
import Button from '../../class2/A01025119/Button.tsx';
import Counter from './counter.tsx';
import '../../class2/A01025119/travel_design.css';

type Props = {
  username?: string;
};

const TravelRequestForm: React.FC<Props> = ({ username }) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'destination':
        setDestination(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      case 'purpose':
        setPurpose(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const travelData = {
      destination,
      startDate,
      endDate,
      purpose,
    };
    console.log('Travel Request:', travelData);
    alert(`Travel request submitted by ${username || 'unknown user'}!`);
  };

  useEffect(() => {
    console.log('Form updated:', { destination, startDate, endDate, purpose });
  }, [destination, startDate, endDate, purpose]);

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Travel Request Form</h1>
        {username && <p>Logged in as: <strong>{username}</strong></p>}

        <InputField
          type="text"
          name="destination"
          placeholder="Destination"
          value={destination}
          onChange={handleChange}
        />

        <InputField
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={startDate}
          onChange={handleChange}
        />

        <InputField
          type="date"
          name="endDate"
          placeholder="End Date"
          value={endDate}
          onChange={handleChange}
        />

        <textarea
          className="form-input"
          name="purpose"
          placeholder="Purpose"
          value={purpose}
          onChange={handleChange}
        />

        <Button label="Submit" onClick={handleSubmit} />

        <Counter />
      </div>
    </div>
  );
};

export default TravelRequestForm;
