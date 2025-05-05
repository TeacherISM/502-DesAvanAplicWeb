import { useEffect, useState } from 'react';

export type Travel = {
  id: number;
  destination: string;
  reason: string;
};

export const useTravelRequests = () => {
  const [travelRequests, setTravelRequests] = useState<Travel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Simulación de API con setTimeout
    const fetchData = async () => {
      try {
        setTimeout(() => {
          const data: Travel[] = [
            { id: 1, destination: 'Berlin', reason: 'Training' },
            { id: 2, destination: 'Rome', reason: 'Workshop' },
            { id: 3, destination: 'Madrid', reason: 'Seminar' },
          ];
          setTravelRequests(data);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch travel requests');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { travelRequests, loading, error };
};
