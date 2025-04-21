import React, { useEffect, useState } from 'react';

type Travel = {
  id: number;
  destination: string;
  reason: string;
};

type TravelFetcherProps = {
    render: (data: Travel[]) => React.ReactNode;
  };

const TravelFetcher = ({ render }: TravelFetcherProps) => {
  const [data, setData] = useState<Travel[]>([]);

  useEffect(() => {
    // Simulación de fetch
    setTimeout(() => {
      const mockData: Travel[] = [
        { id: 1, destination: 'Paris', reason: 'Conference' },
        { id: 2, destination: 'Tokyo', reason: 'Business' },
        { id: 3, destination: 'New York', reason: 'Training' },
      ];
      setData(mockData);
    }, 1000);
  }, []);

  return <>{render(data)}</>;
};

export default TravelFetcher;
