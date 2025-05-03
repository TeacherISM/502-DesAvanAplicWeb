// src/components/TravelRequestForm.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';              // matchers de jest-dom
import TravelRequestForm from './TravelRequestForm';

describe('TravelRequestForm', () => {

  test('renders the travel request form', () => {
    render(<TravelRequestForm />);

    // Labels / inputs
    expect(screen.getByLabelText(/Destination/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/End date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Purpose/i)).toBeInTheDocument();

    // Botón
    expect(
      screen.getByRole('button', { name: /Submit/i })
    ).toBeInTheDocument();
  });

  test('displays validation errors if the form is submitted empty', async () => {
    render(<TravelRequestForm />);

    // Click al botón sin rellenar nada
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Los errores vienen de Zod + RHF, así que pueden aparecer tras microtask
    expect(
      await screen.findByText(/Destination is required/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Start date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/End date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Purpose is required/i)).toBeInTheDocument();
  });

  test('displays error when end date is before start date', async () => {
    render(<TravelRequestForm />);

    // Rellenamos fechas en orden inverso
    fireEvent.input(screen.getByLabelText(/Start date/i), {
      target: { value: '2023-12-31' },
    });
    fireEvent.input(screen.getByLabelText(/End date/i), {
      target: { value: '2023-01-01' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(
      await screen.findByText(/End date must be after start date/i)
    ).toBeInTheDocument();
  });

});
