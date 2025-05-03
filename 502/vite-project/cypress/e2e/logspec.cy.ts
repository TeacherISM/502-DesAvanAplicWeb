describe('Login Page', () => {
  it('should log in with valid credentials', () => {
    cy.visit('http://localhost:5173');  // URL correcta

    // Esperar a que el formulario se cargue correctamente
    cy.get('input[name="username"]').should('be.visible').type('admin'); 
    cy.get('input[name="password"]').should('be.visible').type('password');
    
    // Asegúrate de que el botón Submit esté visible
    cy.get('button[type="submit"]').should('be.visible').click();

    // Verifica que la URL haya cambiado a /dashboard (ajustar según tu lógica de redirección)
    cy.url().should('include', '/dashboard');
  });
});

describe('Login Page', () => {
  it('should display an error message with invalid credentials', () => {
    cy.visit('http://localhost:5173');  // URL correcta

    // Espera a que los elementos estén visibles
    cy.get('input[name="username"]').should('be.visible').type('wronguser');
    cy.get('input[name="password"]').should('be.visible').type('wrongpass');

    cy.get('button[type="submit"]').click();

    // Verifica si el mensaje de error aparece (ajusta según tu aplicación)
    cy.get('.error').should('contain', 'Invalid username or password');
  });
});
