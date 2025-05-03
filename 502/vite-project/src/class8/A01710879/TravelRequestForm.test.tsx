import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TravelRequestForm from '../../class3/A01783637/TravelRequestForm';

// Test para verificar que el formulario se renderiza correctamente
test('renders the travel request form', () => {
  render(<TravelRequestForm />);

  // Verificamos que todos los campos estén presentes
  expect(screen.getByLabelText(/Destination/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/End Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Purpose/i)).toBeInTheDocument();
});

// Test para verificar los errores de validación si el formulario se envía vacío
test('displays validation errors if the form is submitted with invalid data', () => {
  render(<TravelRequestForm />);

  // Simulamos el envío del formulario
  fireEvent.submit(screen.getByText(/Submit/i));

  // Verificamos que los mensajes de error aparezcan para todos los campos obligatorios
  expect(screen.getByText(/Destination is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Start date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/End date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Purpose is required/i)).toBeInTheDocument();
});
