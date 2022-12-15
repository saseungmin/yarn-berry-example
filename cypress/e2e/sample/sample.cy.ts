describe('sample', () => {
  it('finds the content "Learn React"', () => {
    cy.visit('/yarn-berry-example');

    cy.contains('Learn React');
  });
});
