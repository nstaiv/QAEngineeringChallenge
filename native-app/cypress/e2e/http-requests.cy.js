describe("Http requests", () => {
  it("POST request", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/machine-health",
      body: {
        machines: {
          weldingRobot: {
            errorRate: "0.5",
            vibrationLevel: "2.5",
          },
        },
      },
    })
      .its("status")
      .should("eq", 200);
  });
  it("Should create a new machine response", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/machine-health",
      body: {
        machines: {
          weldingRobot: {
            errorRate: "0.5",
            vibrationLevel: "2.5",
          },
        },
      },
    }).then((res) => {
      expect(res.body).to.have.property("factory").equal("70.49");
    });
  });
});
