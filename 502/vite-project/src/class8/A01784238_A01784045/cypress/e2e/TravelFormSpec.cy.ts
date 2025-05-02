describe("Cypress travel form test", () => {
  it("should submit with valid data", () => {
    cy.visit(
      "http://localhost:5173/src/class8/A01784238_A01784045/pages/TravelFormPage.html"
    );
    cy.get("input[name=destination]").should("exist").type("Ciudad de México");
    cy.get("input[name=startDate]").should("exist").type("2023-10-01");
    cy.get("input[name=endDate]").should("exist").type("2023-10-10");
    cy.get("input[name=purpose]").should("exist").type("Business trip");
    cy.get("button[type=submit]").should("exist").click();
    cy.get('[data-testid="notification-success"]').should(
      "contain",
      "Travel request submitted successfully!"
    );
  });
});
