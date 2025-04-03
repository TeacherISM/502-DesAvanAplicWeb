import React from 'react';
import TravelRequestCard from './travel_card';

const mockRequests = [
  {
    title: 'Trip to New York',
    description: 'Attend React conference and meet partners.',
    date: '2025-05-15',
  },
  {
    title: 'Site Visit: Mexico City',
    description: 'Project kickoff and initial inspection.',
    date: '2025-04-20',
  },
  {
    title: 'Workshop in Tokyo',
    description: 'Conduct training and knowledge sharing.',
    date: '2025-06-01',
  },
];

const TravelRequestsPage: React.FC = () => {
  const handleCardClick = (title: string) => {
    console.log(`Card clicked: ${title}`);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>My Travel Requests</h1>
      {mockRequests.map((req, index) => (
        <TravelRequestCard
          key={index}
          title={req.title}
          description={req.description}
          date={req.date}
          onClick={() => handleCardClick(req.title)}
        />
      ))}
    </div>
  );
};

const styles = {
  page: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#121212',
    color: '#fff',
    borderRadius: '12px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '24px',
  },
};

export default TravelRequestsPage;
