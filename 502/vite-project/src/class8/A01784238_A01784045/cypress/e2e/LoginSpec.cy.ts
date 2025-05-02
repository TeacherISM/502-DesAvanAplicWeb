describe("Cypress test", () => {
  it("passes", () => {
    cy.visit(
      "http://localhost:5173/src/class8/A01784238_A01784045/pages/LoginPage.html"
    );
    cy.get("input[name=username]").should("exist").type("admin");
    cy.get("input[name=password]").should("exist").type("password");
    cy.get("button[type=submit]").should("exist").click();
    cy.get('[data-testid="cypress-dashboard-text"]').should(
      "contain",
      "Welcome to the Dashboard"
    );
    cy.get("button").contains("Fetch Data").should("exist").click();
  });
});
