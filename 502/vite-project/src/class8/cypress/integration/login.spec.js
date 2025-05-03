describe('Login Page', () => {
    it('should log in with valid credentials', () => {
      // Visita la página de login
      cy.visit('/login');
      
      // Escribe las credenciales
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('password');
      
      // Haz clic en el botón de login
      cy.get('button[type="submit"]').click();
      
      // Verifica que el usuario fue redirigido al dashboard
      cy.url().should('include', '/dashboard');
    });
  });
  describe('Login Page', () => {
    it('should display an error message with invalid credentials', () => {
      // Visita la página de login
      cy.visit('/login');
      
      // Escribe credenciales inválidas
      cy.get('input[name="username"]').type('wronguser');
      cy.get('input[name="password"]').type('wrongpass');
      
      // Haz clic en el botón de login
      cy.get('button[type="submit"]').click();
      
      // Verifica que el mensaje de error se muestre
      cy.get('.error').should('contain', 'Invalid username or password');
    });
  });
    