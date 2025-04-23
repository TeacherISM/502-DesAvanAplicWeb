import { useState } from 'react';
import InputField from '../../../class2/A01784008/components/InputField';
import Button from '../../../class2/A01784008/components/Button';

const TravelRequestForm = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = () => {
    console.log('Travel Request:', { destination, startDate, endDate, purpose });
  };

  return (
    <div className="form-section">
      <h2>Travel Request Form</h2>
      <InputField type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <InputField type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <InputField type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <textarea placeholder="Purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} className="p-2 border rounded w-full" />
      <Button label="Submit" type="submit" onClick={handleSubmit} />
    </div>
  );
};

export default TravelRequestForm;
