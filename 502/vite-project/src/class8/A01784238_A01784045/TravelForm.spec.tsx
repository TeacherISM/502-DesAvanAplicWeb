import "@testing-library/jest-dom/jest-globals";
import { render, fireEvent } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import TravelForm from "./TravelForm";

test("Renders the TravelForm component", () => {
  const { getByLabelText, getByText } = render(<TravelForm />);
  expect(getByLabelText(/Destination/i)).toBeInTheDocument();
  expect(getByLabelText(/Start Date/i)).toBeInTheDocument();
  expect(getByLabelText(/End Date/i)).toBeInTheDocument();
  expect(getByText(/Submit/i)).toBeInTheDocument();
});

test("displays validation errors if the form is submitted with invalid data", () => {
  const { getByText } = render(<TravelForm />);
  fireEvent.click(getByText(/Submit/i));

  expect(getByText(/Destination is required/i)).toBeInTheDocument();
  expect(getByText(/End date is required/i)).toBeInTheDocument();
  expect(getByText(/Purpose is required/i)).toBeInTheDocument();
});
