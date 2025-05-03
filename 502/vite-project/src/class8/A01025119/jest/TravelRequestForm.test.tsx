import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TravelRequestForm from "../../../class3/A01025119/Travel_request";

beforeEach(() => {
  window.alert = jest.fn();
});

describe("TravelRequestForm Component", () => {
  test("renders all form fields by placeholder", () => {
    const { getByPlaceholderText } = render(<TravelRequestForm />);
    expect(getByPlaceholderText("Destination")).toBeInTheDocument();
    expect(getByPlaceholderText("Start Date")).toBeInTheDocument();
    expect(getByPlaceholderText("End Date")).toBeInTheDocument();
    expect(getByPlaceholderText("Purpose")).toBeInTheDocument();
  });

  test("calls alert with 'unknown user' on submit click when fields are empty", () => {
    const { getByText } = render(<TravelRequestForm />);
    fireEvent.click(getByText("Submit"));
    expect(window.alert).toHaveBeenCalledWith(
      "Travel request submitted by unknown user!"
    );
  });
});
