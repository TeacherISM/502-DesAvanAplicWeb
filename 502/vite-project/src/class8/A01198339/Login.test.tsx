import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';


test('renders the login form', () => {
  const { getByLabelText, getByText } = render(<Login onLogin={() => {}} />);
  expect(getByLabelText('Username')).toBeInTheDocument();
  expect(getByLabelText('Password')).toBeInTheDocument();
  expect(getByText('Submit')).toBeInTheDocument();
});

test('calls onLogin with entered credentials on submit', () => {
  const mockLogin = jest.fn();
  const { getByLabelText, getByText } = render(<Login onLogin={mockLogin} />);

  fireEvent.change(getByLabelText('Username'), { target: { value: 'user1' } });
  fireEvent.change(getByLabelText('Password'), { target: { value: 'secret123' } });

  fireEvent.submit(getByText('Submit'));

  expect(mockLogin).toHaveBeenCalledWith('user1', 'secret123');
});
