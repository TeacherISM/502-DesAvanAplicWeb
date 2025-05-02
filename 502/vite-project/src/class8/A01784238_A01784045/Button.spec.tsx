import "@testing-library/jest-dom/jest-globals";
import { render, screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import Button from "./components/Button";

test("Renders Button component", () => {
  render(<Button label="Click Me!" />);
  const buttonElement = screen.getByText("Click Me!");
  expect(buttonElement).toBeInTheDocument();
});

test("Calls the onClick function when clicked", () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me!" onClick={handleClick} />);
  const buttonElement = screen.getByText("Click Me!");
  buttonElement.click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
