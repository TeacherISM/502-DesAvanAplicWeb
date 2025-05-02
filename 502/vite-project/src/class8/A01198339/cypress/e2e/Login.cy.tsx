
describe('Login Page', () => {
    it('should log in with valid credentials for admin, then display a message', () => {
      cy.visit('/src/class8/A01198339/index.html');
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('admin');
      cy.get('button[type="submit"]').click();
      cy.get('[data-cy="welcome"]').should('contain', 'Welcome, Admin!');
      cy.get('button[class="logout"]').click();
    });

    it('should log in with valid credentials for manager, then display a message', () => {
        cy.visit('/src/class8/A01198339/index.html');
        cy.get('input[name="username"]').type('manager');
        cy.get('input[name="password"]').type('manager');
        cy.get('button[type="submit"]').click();
        cy.get('[data-cy="welcome"]').should('contain', 'Welcome, Manager!');
        cy.get('button[class="logout"]').click();
      });

      it('should log in with valid credentials for employee, then display a message', () => {
        cy.visit('/src/class8/A01198339/index.html');
        cy.get('input[name="username"]').type('employee');
        cy.get('input[name="password"]').type('employee');
        cy.get('button[type="submit"]').click();
        cy.get('[data-cy="welcome"]').should('contain', 'Welcome, Employee!');
        cy.get('button[class="logout"]').click();
      });
      it('should display an error message with invalid credentials', () => {
        cy.visit('/src/class8/A01198339/index.html');
        cy.window().then((win) => {
            const stub = cy.stub(win, 'alert').as('alert');
            cy.on('window:alert', stub); // esta línea asegura el binding
        });
        cy.get('input[name="username"]').type('wronguser');
        cy.get('input[name="password"]').type('wrongpass');
        cy.get('button[type="submit"]').click();
        cy.get('@alert').should('have.been.calledWith', 'Invalid credentials');
      });
  });
  