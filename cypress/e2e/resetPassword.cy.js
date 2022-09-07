describe("Render the Edit Password components:", () => {
    it("Renders correctly Edit Password", () => {
        cy.visit("/login");
        cy.findAllByText("Sign In here!").click();
        cy.get('input[name=email]').type('gabriel6@hotmail.com');
        cy.get('input[name=password]').type('1234567');
        cy.get('form').find('button[type=submit]').click();
        cy.get('#playerIcon').should("exist");
        cy.get('#playerIcon').click();
        cy.findAllByText('Edit Password').should("exist");
        cy.findAllByText('Edit Password').click();;
        cy.get('#editUpdatePassword').should("exist");  
    })
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
});