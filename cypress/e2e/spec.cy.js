describe("Calculator Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Addition", () => {
    cy.get('[data-cy="btn-5"]').click();
    cy.get('[data-cy="btn-+"]').click();
    cy.get('[data-cy="btn-3"]').click();
    cy.get('[data-cy="btn-="]').click();
    cy.get('[data-cy="display"]').should("have.value", "8");
  });

  it("Subtraction", () => {
    cy.get('[data-cy="btn-1"]').click();
    cy.get('[data-cy="btn-0"]').click();
    cy.get('[data-cy="btn--"]').click();
    cy.get('[data-cy="btn-4"]').click();
    cy.get('[data-cy="btn-="]').click();
    cy.get('[data-cy="display"]').should("have.value", "6");
  });

  it("Multiplication", () => {
    cy.get('[data-cy="btn-6"]').click();
    cy.get('[data-cy="btn-*"]').click();
    cy.get('[data-cy="btn-7"]').click();
    cy.get('[data-cy="btn-="]').click();
    cy.get('[data-cy="display"]').should("have.value", "42");
  });

  it("Division", () => {
    cy.get('[data-cy="btn-1"]').click();
    cy.get('[data-cy="btn-5"]').click();
    cy.get('[data-cy="btn-/"]').click();
    cy.get('[data-cy="btn-3"]').click();
    cy.get('[data-cy="btn-="]').click();
    cy.get('[data-cy="display"]').should("have.value", "5");
  });
});