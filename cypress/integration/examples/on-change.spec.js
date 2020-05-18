import "@testing-library/cypress/add-commands";

it("typing {selectall} and then {backspace} in an input should call `onChange`", () => {
  cy.visit("/");

  // Type per https://docs.cypress.io/api/commands/type.html#Arguments
  cy
    .findByRole("textbox", { name: /input/i })
    .type("{selectall}{backspace}");

  cy.findByText(/onChange event was fired/i);
});
