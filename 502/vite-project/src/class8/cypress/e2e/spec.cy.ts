describe('Login Page', () => {
  it('should log in with valid credentials', () => {
    cy.visit('http://localhost:3000');  // Asegúrate de que la URL sea la correcta
    
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('password');
    
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');  // Verifica que la redirección sea correcta
  });
});

describe('Login Page', () => {
  it('should display an error message with invalid credentials', () => {
    cy.visit('http://localhost:3000');  // Asegúrate de que la URL sea la correcta
    
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Invalid username or password');
  });
});
