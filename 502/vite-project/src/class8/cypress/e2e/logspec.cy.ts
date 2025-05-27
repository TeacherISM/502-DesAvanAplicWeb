// cypress/e2e/loginspec.cy.ts

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/src/class6/A01783704/index.html");
  });

  it("logs in with valid credentials", () => {
    cy.get('[data-testid="username"]').type("admin");
    cy.get('[data-testid="password"]').type("password");
    cy.get('[data-testid="login-button"]').click();

    // Ahora esperamos el mensaje de éxito
    cy.get('[data-testid="success-msg"]')
      .should("be.visible")
      .and("contain.text", "Login successful");
  });

  it("shows an error on invalid credentials", () => {
    cy.get('[data-testid="username"]').type("wronguser");
    cy.get('[data-testid="password"]').type("wrongpass");
    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-testid="error-msg"]')
      .should("be.visible")
      .and("contain.text", "Invalid username or password");
  });
});
