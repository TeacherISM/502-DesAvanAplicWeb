import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Button from "./Button";

test("Renders Button component", () => {
  render(<Button label="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});
