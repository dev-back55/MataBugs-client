describe("Render the About components:", () => {
    before(() => {
        cy.visit("/about");
    });
    it("Renders correctly NavBar", () => {
        cy.get("#componentNavBar").should("exist");
    })
    it("Renders correctly SideBar", () => {
        cy.get("#componentSidebar").should("exist");
    })
    it("Renders correctly Logo", () => {
        cy.get("#componentLogo").should("exist");
    })
    it("Renders correctly Links", () => {
        cy.get("#componentLinks").should("exist");
    })
    it("Renders correctly About", () => {
        cy.get("#componentAbout").should("exist");
    })
});