describe("Render the home page", () => {
    beforeEach(() => {
        cy.visit("/search");
    });
    xit("Renders correctly NavBar", () => {
        cy.visit("/");
        cy.get(".NavBar_container__bSMZq").should("exist");
    })

    xit("Allows the date picker to be used", () => {
        cy.visit("/");
    })
})