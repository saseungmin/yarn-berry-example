describe('sample', () => {
  it('finds the content "Learn React"', () => {
    cy.visit('/');

    cy.contains('Learn React');
  });
});
