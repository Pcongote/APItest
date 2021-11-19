/// <reference types="Cypress" />

describe("test Api automation", () => {
  it("get user", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        authorization:
          "Bearer d6f4f9543bee45e9756a3e5d7f7b33028443f30fdf67eeac995f4fabf273145c",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.meta.pagination.limit).to.eq(20);
    });
  });
});
