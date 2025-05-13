
describe('App Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('renders the title and HOC button', () => {
      cy.contains('Clase 4 - Milestone 2').should('be.visible');
      cy.contains('Higher-Order Component (HOC)').should('be.visible');
      cy.get('button').contains('Click aquí').click();
      cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Click registrado!');
      });
    });
  
    it('renders user data from Render Props', () => {
      cy.contains('Render Props').should('be.visible');
      cy.contains('Nombre:').should('exist');
      cy.contains('Email:').should('exist');
    });
  
    it('renders user data from Custom Hook', () => {
      cy.contains('Custom Hook').should('be.visible');
      cy.contains('Nombre:').should('exist');
      cy.contains('Email:').should('exist');
    });
  
    it('shows the Travel Request Form', () => {
      cy.contains('Travel Request Form').should('be.visible');
      cy.get('form').should('exist');
    });
  });