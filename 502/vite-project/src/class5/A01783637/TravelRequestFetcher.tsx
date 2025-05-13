// components/TravelRequestFetcher.tsx
import React, { useEffect, useState } from "react";

interface TravelRequest {
  id: number;
  name: string;
  capital: string;
}

type Params = {
  travelRequests: TravelRequest[];
  loading: boolean;
  error: Error | null;
};

interface Props {
  render: (params: Params) => React.ReactNode;
}

const TravelRequestFetcher: React.FC<Props> = ({ render }) => {
  const [travelRequests, setTravelRequests] = useState<TravelRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://api.sampleapis.com/countries/countries"
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const raw = (await res.json()) as Array<{
          id: number;
          name: string;
          capital: string;
        }>;

        const mapped: TravelRequest[] = raw.slice(0, 15).map((p) => ({
          id: p.id,
          name: p.name,
          capital: p.capital,
        }));

        setTravelRequests(mapped);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return <>{render({ travelRequests, loading, error })}</>;
};

export default TravelRequestFetcher;
