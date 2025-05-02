// cypress/e2e/login-error.cy.js

describe("Login Form Error Test", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("http://localhost:5173/src/class1/A01784008/index.html");
  });

  it("should display an error message when credentials are incorrect", () => {
    // Type invalid credentials
    cy.get('input[name="usuario"]').type("wronguser");
    cy.get('input[name="contrasena"]').type("wrongpassword");

    // Click the login button
    cy.get("button").contains("Ingresar").click();

    // Check if error message is displayed
    cy.get('[data-testid="login-error"]')
      .should("be.visible")
      .and("contain.text", "Usuario o contraseña incorrectos");
  });

  it("should display an error message when fields are empty", () => {
    // Click the login button without entering credentials
    cy.get("button").contains("Ingresar").click();

    // Check if error message is displayed
    cy.get('[data-testid="login-error"]')
      .should("be.visible")
      .and("contain.text", "Por favor ingrese usuario y contraseña");
  });

  it("should clear error message when user starts typing again", () => {
    // Try to login with empty fields first
    cy.get("button").contains("Ingresar").click();

    // Verify error message appears
    cy.get('[data-testid="login-error"]').should("be.visible");

    // Start typing in username field
    cy.get('input[name="usuario"]').type("a");

    // Verify error message disappears
    cy.get('[data-testid="login-error"]').should("not.exist");
  });
});
