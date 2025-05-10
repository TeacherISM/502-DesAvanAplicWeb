describe('Login Page', () => {
    it('should log in with valid credentials', () => {
      cy.visit('/src/class1/A01025119/webpage/A01025119.html#class6-login');
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('password');
      cy.get('button.main-button').click();
      cy.url().should('include', '/dashboard');
    });
  
    it('should display an error message with invalid credentials', () => {
      cy.visit('/src/class1/A01025119/webpage/A01025119.html#class6-login');
      cy.get('input[name="username"]').type('wronguser');
      cy.get('input[name="password"]').type('wrongpass');
      cy.get('button.main-button').click();
      cy.get('.error').should('contain', 'Invalid username or password');
    });
  });
  