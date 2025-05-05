import { useTravelRequests, Travel } from './UseTravelRequest';

const TravelRequestList = () => {
  const { travelRequests, loading, error } = useTravelRequests();

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Travel Requests (Custom Hook)</h2>
      {loading && <p>Loading travel requests...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {travelRequests.map((req: Travel) => (
          <li key={req.id}>
            ✈️ {req.destination} - {req.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelRequestList;
