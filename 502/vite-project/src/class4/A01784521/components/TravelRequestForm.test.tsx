import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TravelRequestForm from './TravelRequestForm';

describe('TravelRequestForm', () => {
  test('renders the travel request form', () => {
    const { getByPlaceholderText } = render(<TravelRequestForm onSubmit={() => {}} />);
    expect(getByPlaceholderText('Destination')).toBeInTheDocument();
    expect(getByPlaceholderText('Start Date')).toBeInTheDocument();
    expect(getByPlaceholderText('End Date')).toBeInTheDocument();
    expect(getByPlaceholderText('Purpose')).toBeInTheDocument();
  });

  test('displays validation errors if the form is submitted with invalid data', () => {
    const { getByText } = render(<TravelRequestForm onSubmit={() => {}} />);
    fireEvent.click(getByText('Enviar')); // Cambiar 'Submit' a 'Enviar'
    expect(getByText('Destination is required')).toBeInTheDocument();
    expect(getByText('Start date is required')).toBeInTheDocument();
    expect(getByText('End date is required')).toBeInTheDocument();
    expect(getByText('Purpose is required')).toBeInTheDocument();
  });

  test('submits the form with valid data and does not show validation errors', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<TravelRequestForm onSubmit={() => {}} />);
    fireEvent.change(getByPlaceholderText('Destination'), { target: { value: 'Paris' } });
    fireEvent.change(getByPlaceholderText('Start Date'), { target: { value: '2025-05-01' } });
    fireEvent.change(getByPlaceholderText('End Date'), { target: { value: '2025-05-10' } });
    fireEvent.change(getByPlaceholderText('Purpose'), { target: { value: 'Business' } });

    fireEvent.click(getByText('Enviar')); // Cambiar 'Submit' a 'Enviar'

    expect(queryByText('Destination is required')).not.toBeInTheDocument();
    expect(queryByText('Start date is required')).not.toBeInTheDocument();
    expect(queryByText('End date is required')).not.toBeInTheDocument();
    expect(queryByText('Purpose is required')).not.toBeInTheDocument();
  });
});
