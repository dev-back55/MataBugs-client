describe("Render the Detail Page components:", () => {
    before(() => {
        cy.visit("/home");
        cy.findAllByText("All Players").should("exist");
        cy.findAllByText("All Players").first().click();
        cy.url().should("include", "search");
        cy.get('button[name=details]').first().click();
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
    it("Renders correctly Card Details", () => {
        cy.get("#componentCardDetail").should("exist");
    })
});


describe("Render Search View:", () => {
    it("Renders correctly NavBar", () => {
        cy.visit("/search", { timeout: 10000 });
        cy.get('button[name=details]').first().click();
        cy.get(".NavBar_container__bSMZq", { timeout: 10000 }).should("exist");
    })
    xit("Renders correctly Card Detail", () => {
        cy.get(".CardDetails_container__pJs5H").should("exist");
    }) 
    xit("Card Player: Renders correctly Card Image", () => {
        cy.get(".CardDetails_imageContainer__jsEx1").should("exist");
    })
    xit("Card Player: Renders correctly Card Title", () => {
        cy.get(".CardDetails_title__L--r5").should("exist");
    })
    xit("Card Player: Renders correctly Card Status", () => {
        cy.get(".CardDetails_spanStatus__S5RfX").should("exist");
    })
    xit("Card Player: Renders correctly Card ID", () => {
        cy.get(".CardDetails_infoId__dVDVf").should("exist");
    })
    xit("Card Player: Renders correctly Card Ranking", () => {
        cy.get(".CardDetails_infoRanking__7qMnb").should("exist");
    })
    it("Renders correctly boton Edit Profile", () => {
        cy.visit("/login", { timeout: 10000 });
        cy.findAllByText("Sign In here!").click();
        cy.get('input[name=email]').type('gabriel5@gmail.com');
        cy.get('input[name=password]').type('123456');
        cy.get('form').find('button[type=submit]').click();
        cy.get('#search').click()
        cy.get('button[name=details]').first().click();
        cy.get('button[name=editprofile]').should("exist");        
    })
    it("Renders correctly boton Confirme Change", () => {
        cy.get('button[name=editprofile]').click();
        cy.get('button[name=confirme]').should("exist");        
    })
    it("Close correctly Card Details", () => {
        cy.get('.CardDetails_closeCard__VYOog').should("exist");
        cy.get('button[name=closeCardDetail]').should("exist");
        cy.get('button[name=closeCardDetail]').click();
        cy.url().should('not.include', "/player");
        cy.url().should('include', "/search");
    })
})

