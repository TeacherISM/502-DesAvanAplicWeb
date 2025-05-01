// cypress/e2e/travel-form.cy.js

describe('Travel Form Tests', () => {
  // Login before each test
  beforeEach(() => {
    // Visit the page
    cy.visit('http://localhost:5173/src/class2/A01784008/index.html');
    
    // Login with valid credentials
    cy.get('input').first().type('ivan');
    cy.get('input[type="password"]').type('admin');
    cy.get('button').first().click();
    
    // Verify successful login
    cy.contains('Bienvenido Ivan!').should('be.visible');
  });

  it('Test that the form submits correctly', () => {
    // Form test data
    const formData = {
      solicitante: 'Juan Pérez',
      puesto: 'Gerente de Ventas',
      origen: 'Ciudad de México',
      destino: 'Guadalajara',
      fechaInicio: '2025-05-15',
      fechaFin: '2025-05-20',
      motivo: 'Reunión con clientes potenciales'
    };
    
    // Fill in the form
    cy.get('input[name="solicitante"]').type(formData.solicitante);
    cy.get('input[name="puesto"]').type(formData.puesto);
    cy.get('input[name="origen"]').type(formData.origen);
    cy.get('input[name="destino"]').type(formData.destino);
    cy.get('input[type="date"]').first().type(formData.fechaInicio);
    cy.get('input[type="date"]').last().type(formData.fechaFin);
    cy.get('textarea').type(formData.motivo);
    
    // Submit the form
    cy.contains('button', 'Crear solicitud').click();
    
    // Verify card creation
    cy.get('.card-list').within(() => {
      cy.contains(formData.solicitante).should('be.visible');
      cy.contains(formData.puesto).should('be.visible');
      cy.contains(formData.origen).should('be.visible');
      cy.contains(formData.destino).should('be.visible');
      cy.contains(formData.motivo).should('be.visible');
    });
    
    // Verify form reset
    cy.get('input[name="solicitante"]').should('have.value', '');
    cy.get('input[name="puesto"]').should('have.value', '');
    cy.get('input[name="origen"]').should('have.value', '');
    cy.get('input[name="destino"]').should('have.value', '');
    cy.get('textarea').should('have.value', '');
  });

  it('Test that validation errors are displayed if the form is submitted with invalid data', () => {
    // Test empty form submission
    cy.contains('button', 'Crear solicitud').click();
    cy.get('.error-message').should('be.visible')
      .and('contain', 'Todos los campos son obligatorios');
    
    // Test partial form submission
    cy.get('input[name="solicitante"]').type('Juan Pérez');
    cy.get('input[name="puesto"]').type('Gerente de Ventas');
    cy.contains('button', 'Crear solicitud').click();
    cy.get('.error-message').should('be.visible');
    cy.get('.card-list').should('not.contain', 'Juan Pérez');
    
    // Test invalid date range
    const invalidDateData = {
      origen: 'Ciudad de México',
      destino: 'Guadalajara',
      fechaInicio: '2025-05-20',
      fechaFin: '2025-05-15', // End date before start date
      motivo: 'Reunión con clientes potenciales'
    };
    
    cy.get('input[name="origen"]').type(invalidDateData.origen);
    cy.get('input[name="destino"]').type(invalidDateData.destino);
    cy.get('input[type="date"]').first().type(invalidDateData.fechaInicio);
    cy.get('input[type="date"]').last().type(invalidDateData.fechaFin);
    cy.get('textarea').type(invalidDateData.motivo);
    
    cy.contains('button', 'Crear solicitud').click();
    cy.get('.error-message').should('be.visible')
      .and('contain', 'La fecha de fin no puede ser anterior a la fecha de inicio');
    
    // Fix the dates and submit again
    cy.get('input[type="date"]').first().clear().type('2025-05-15');
    cy.get('input[type="date"]').last().clear().type('2025-05-20');
    cy.contains('button', 'Crear solicitud').click();
    
    // Verify successful submission
    cy.get('.card-list').should('contain', 'Juan Pérez');
  });
});
