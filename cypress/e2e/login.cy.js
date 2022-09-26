const domain = "http://localhost:3000";

describe("empty spec", () => {
  beforeEach(() => {
    cy.intercept("POST", "/api/login", { fixture: "login.json" });
    cy.intercept("GET", "/films", { fixture: "films.json" });
  });
  it("should redirect to login page", () => {
    cy.visit(domain);

    const btnLogin = cy.get("[data-cy=btn-login]");

    btnLogin.should("be.visible");
    btnLogin.click();

    cy.url().should("eq", `${domain}/login`);
  });

  it("should login successfully", () => {
    const inputUsername = cy.get("[data-cy=input-username]");
    inputUsername.should("be.visible");
    inputUsername.type("username");

    const inputPassword = cy.get("[data-cy=input-password]");
    inputPassword.should("be.visible");
    inputPassword.type("password");

    const btnLogin = cy.get("[data-cy=btn-login]");
    btnLogin.should("be.visible");
    btnLogin.click();
    cy.setCookie("access_token", "fake-token");

    cy.url().should("eq", `${domain}/login`);
  });
});
