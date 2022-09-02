describe("Render the home page", () => {
    it("Renders correctly NavBar", () => {
        cy.visit("/");
        cy.get(".NavBar_container__bSMZq").should("exist");
    })

    it("Allows the date picker to be used", () => {
        cy.visit("/");
    })
})