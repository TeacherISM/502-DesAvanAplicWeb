// src/class8/A01025119/Button.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../../../class2/A01025119/Button";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    const { getByText } = render(<Button label="Click Me" />);
    expect(getByText("Click Me")).toBeInTheDocument();
  });

  test("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button label="Click Me" onClick={handleClick} />
    );
    fireEvent.click(getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
