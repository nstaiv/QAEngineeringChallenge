describe('Welding Robot Machine Health', () => {
  it('Calculates Machine Health and resets data', () => {
    cy.visit('/');
    cy.contains('Please').click();
    cy.get('[data-testid="web_picker"]').first().select('weldingRobot');
    cy.get('[data-testid="web_picker"]').last().select('vibrationLevel');
    cy.get('input').type('4.0');
    cy.contains('Save').click();
    cy.contains('Saved').should('be.visible');
    cy.visit('/');
    cy.contains('Calculate Health').click();
    cy.get('.css-text-146c3p1').should('contain', 87.50);
    cy.get('button').contains('Reset Machine Data').click();
    cy.contains('Please log a part to check machine health').should('be.visible');

  })
})

describe('Multiple Machine Health', () => {
  it('Calculates Machine Health and resets data for Painting Station, Assembly Line and Quality Control Station', { defaultCommandTimeout: 1100}, () => {
    cy.visit('/');
    cy.get('span').contains('Log Part').click();
    cy.location('pathname').should('eq', '/two');
    cy.get('[data-testid="web_picker"]').first().select('paintingStation');
    cy.get('[data-testid="web_picker"]').last().select('pressure');
    cy.get('input').type('55.0');
    const btn = cy.get('button').contains('Save')
    btn.click();
    cy.get('[data-testid="web_picker"]').first().select('assemblyLine');
    cy.get('[data-testid="web_picker"]').last().select('beltSpeed');
    cy.get('input').clear().type('1.5');
    btn.click();
    cy.get('[data-testid="web_picker"]').first().select('qualityControlStation');
    cy.get('[data-testid="web_picker"]').last().select('cameraCalibration');
    cy.get('input').clear().type('0.7');
    btn.click();
    cy.get('span').contains('Machine State').click();
    cy.location('pathname').should('eq', '/');
    cy.contains('Calculate Health').click();
    cy.get('button').contains('Reset Machine Data').click();
  })
})

describe('Machine Health', () => {
  it('Calculates Individual Machine with multiple parts', () => {
    cy.visit('/');
    cy.visit('/two');
    cy.get('[data-testid="web_picker"]').first().select('paintingStation');
    cy.get('[data-testid="web_picker"]').last().select('pressure');
    cy.get('input').type('55.0')
    cy.get('button').contains('Save').as('saveBtn');
    cy.get('@saveBtn').click();
    cy.get('[data-testid="web_picker"]').last().select('nozzleCondition');
    cy.get('input').clear().type('0.5');
    cy.get('@saveBtn').click();
    cy.go('back');
    cy.go('forward');
    cy.get('[data-testid="web_picker"]').first().select('assemblyLine');
    cy.get('[data-testid="web_picker"]').last().select('speed');
    cy.get('input').clear().type('8.0');
    cy.get('[data-testid="web_picker"]').last().select('fittingTolerance');
    cy.get('input').clear().type('0.02')
    cy.get('@saveBtn').click();
    cy.visit('/');
    cy.contains('Calculate Health').click();
    cy.contains('Machine Health Score').should('be.visible');
    cy.contains('Reset Machine Data').click();
    cy.contains('Factory Health Score').should('not.exist');


  })
})