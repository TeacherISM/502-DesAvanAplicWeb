import React from 'react';

interface TravelRequestCardProps {
  title: string;
  description: string;
  date: string;
  onClick?: () => void;
}

const TravelRequestCard: React.FC<TravelRequestCardProps> = ({ title, description, date, onClick }) => {
  return (
    <div style={styles.card} onClick={onClick}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <p style={styles.date}>📅 {date}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '16px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  title: {
    fontSize: '20px',
    marginBottom: '8px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '6px',
  },
  date: {
    fontSize: '14px',
    opacity: 0.8,
  },
};

export default TravelRequestCard;
