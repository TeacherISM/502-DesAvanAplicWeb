import { JSX, useEffect, useState } from 'react';

type Props = {
  render: (props: {
    travelRequests: any[];
    loading: boolean;
    error: Error | null;
  }) => JSX.Element;
};

export default function TravelRequestFetcher({ render }: Props) {
  const [travelRequests, setTravelRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // simulación de API
      .then((res) => res.json())
      .then((data) => {
        // Simula que cada usuario tiene un campo "destination"
        const mocked = data.map((user: any) => ({
          id: user.id,
          destination: user.address.city,
        }));
        setTravelRequests(mocked);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return render({ travelRequests, loading, error });
}
