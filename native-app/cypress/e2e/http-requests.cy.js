describe("Http requests", () => {
  it("Welding Robot API status code", () => {
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
  it("Welding Robot API calculation ", () => {
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

it("Assembly Line API", () => {
  cy.request({
    method: "POST",
    url: "http://localhost:3001/machine-health",
    body: {
      machines: {
        assemblyLine: {
          speed: "8.0",
          fittingTolerance: "0.02",
          beltSpeed: "1.5",
          alignmentAccuracy: "0.5",
        },
      },
    },
  }).then((res) => {
    expect(res.status).equal(200);
    expect(res.body).to.have.property("factory").equal("72.43");
  });
});
