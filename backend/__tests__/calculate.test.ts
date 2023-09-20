import { calculatePartHealth, calculateMachineHealth } from "../calculations";
import {
  MachineType,
  WeldingRobotPart,
  PaintingStationPart,
  AssemblyLinePart,
  QualityControlStationPart,
  partInfo,
} from "../../native-app/data/types";

// Welding Robot machine calculations
describe("calculatePartHealth", () => {
  it("calculates part health correctly", () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = { name: WeldingRobotPart.ErrorRate, value: 0.5 };
    const expectedHealth = 72.22222222222223;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe("calculateMachineHealth", () => {
  it("calculates machine health correctly", () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const parts = [
      { name: WeldingRobotPart.ErrorRate, value: 0.5 },
      { name: WeldingRobotPart.VibrationLevel, value: 4.0 },
      { name: WeldingRobotPart.ElectrodeWear, value: 0.8 },
      { name: WeldingRobotPart.ShieldingPressure, value: 12.0 },
      { name: WeldingRobotPart.WireFeedRate, value: 7.5 },
      { name: WeldingRobotPart.ArcStability, value: 92.0 },
      { name: WeldingRobotPart.SeamWidth, value: 1.5 },
      { name: WeldingRobotPart.CoolingEfficiency, value: 85.0 },
    ];
    const expectedHealth = 76.70138888888889;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});

// Painting Station machine calculations
describe("calculate Painting Station Part Health", () => {
  it("calculates part health correctly", () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const part: partInfo = { name: PaintingStationPart.FlowRate, value: 15.0 };
    const expectedHealth = 100.0;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe("calculate Painting Station Machine Health", () => {
  it("calculates machine health correctly", () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const parts = [
      { name: PaintingStationPart.Pressure, value: 55.0 },
      { name: PaintingStationPart.NozzleCondition, value: 0.5 },
    ];
    const expectedHealth = 75.0;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});

// Assembly Line machine calculations
describe("calculate Assembly Line Part Health", () => {
  it("calculates part health correctly", () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const part: partInfo = {
      name: AssemblyLinePart.AlignmentAccuracy,
      value: 0.5,
    };
    const expectedHealth = 72.22222222222223;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe("calculate Assembly Line Machine Health", () => {
  it("calculates machine health correctly", () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const parts = [
      { name: AssemblyLinePart.AlignmentAccuracy, value: 0.5 },
      { name: AssemblyLinePart.BeltSpeed, value: 1.5 },
      { name: AssemblyLinePart.FittingTolerance, value: 0.02 },
      { name: AssemblyLinePart.Speed, value: 8.0 },
    ];
    const expectedHealth = 72.43055555555556;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});

// Quality Control Station machine calculations
describe("calculate Quality Control Station Part Health", () => {
  it("calculates part health correctly", () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const part: partInfo = {
      name: QualityControlStationPart.CameraCalibration,
      value: 0.7,
    };
    const expectedHealth = 85;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe("calculate Quality Control Station Machine Health", () => {
  it("calculates machine health correctly", () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const parts = [
      { name: QualityControlStationPart.CameraCalibration, value: 0.7 },
      { name: QualityControlStationPart.CriteriaSettings, value: 0.8 },
      { name: QualityControlStationPart.LightIntensity, value: 93.0 },
    ];
    const expectedHealth = 85;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
}); // Painting Station machine calculations
describe("calculate Painting Station Part Health", () => {
  it("calculates part health correctly", () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const part: partInfo = { name: PaintingStationPart.FlowRate, value: 15.0 };
    const expectedHealth = 100.0;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe("calculate Painting Station Machine Health", () => {
  it("calculates machine health correctly", () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const parts = [
      { name: PaintingStationPart.Pressure, value: 55.0 },
      { name: PaintingStationPart.NozzleCondition, value: 0.5 },
    ];
    const expectedHealth = 75.0;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});

// Assembly Line machine calculations
describe("calculate Assembly Line Part Health", () => {
  it("calculates part health correctly", () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const part: partInfo = {
      name: AssemblyLinePart.AlignmentAccuracy,
      value: 0.5,
    };
    const expectedHealth = 72.22222222222223;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe("calculate Assembly Line Machine Health", () => {
  it("calculates machine health correctly", () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const parts = [
      { name: AssemblyLinePart.AlignmentAccuracy, value: 0.5 },
      { name: AssemblyLinePart.BeltSpeed, value: 1.5 },
      { name: AssemblyLinePart.FittingTolerance, value: 0.02 },
      { name: AssemblyLinePart.Speed, value: 8.0 },
    ];
    const expectedHealth = 72.43055555555556;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});

// Quality Control Station machine calculations
describe("calculate Quality Control Station Part Health", () => {
  it("calculates part health correctly", () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const part: partInfo = {
      name: QualityControlStationPart.CameraCalibration,
      value: 0.7,
    };
    const expectedHealth = 85;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe("calculate Quality Control Station Machine Health", () => {
  it("calculates machine health correctly", () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const parts = [
      { name: QualityControlStationPart.CameraCalibration, value: 0.7 },
      { name: QualityControlStationPart.CriteriaSettings, value: 0.8 },
      { name: QualityControlStationPart.LightIntensity, value: 93.0 },
    ];
    const expectedHealth = 85;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});
