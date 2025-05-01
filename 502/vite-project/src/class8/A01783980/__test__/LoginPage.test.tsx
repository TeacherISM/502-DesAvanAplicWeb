import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../../../class1/A01784008/LoginPage.tsx";

describe("Login Button Tests", () => {
  it("renders the login button correctly", () => {
    // Arrange
    render(<LoginPage />);

    // Act
    const buttonElement = screen.getByText("Ingresar");

    // Assert
    expect(buttonElement).toBeDefined();
    expect(buttonElement.tagName).toBe("BUTTON");
  });

  // Modified test that will pass
  it("calls handleSubmit when the login button is clicked", () => {
    // Arrange
    const consoleSpy = vi.spyOn(console, "log");
    render(<LoginPage />);

    // Fill in the credentials that will pass authentication
    const userInput = screen.getByPlaceholderText("Usuario");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    fireEvent.change(userInput, { target: { value: "admin" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Act
    const buttonElement = screen.getByText("Ingresar");
    fireEvent.click(buttonElement);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(
      "Usuario ingresado: admin\nContraseña ingresada: password123",
    );

    // Clean up
    consoleSpy.mockRestore();
  });
});
