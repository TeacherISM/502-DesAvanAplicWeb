import React from 'react';
import TravelRequestFetcher from './TravelRequestFetcher';

interface TravelRequest {
  id: string;
  destination: string;
}

const TravelRequestList: React.FC = () => {
  return (
    <TravelRequestFetcher
      render={({
        travelRequests,
        loading,
        error,
      }: {
        travelRequests: TravelRequest[];
        loading: boolean;
        error: Error | null;
      }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return (
          <ul>
            {travelRequests.map((request) => (
              <li key={request.id}>{request.destination}</li>
            ))}
          </ul>
        );
      }}
    />
  );
};

export default TravelRequestList;
