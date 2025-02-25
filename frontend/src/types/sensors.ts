export interface TypeSensorsProps {
    typeSensor: string,
    min: number,
    max: number,
}

export const sensorConfigs: Record<string, TypeSensorsProps> = {
    IBI: { typeSensor: "IBI", min: 0, max: 2 },
    HR: { typeSensor: "HR", min: 40, max: 180 },
    BVP: { typeSensor: "BVP", min: -0.3, max: 0.3 },
    EDA: {typeSensor: "EDA", min:0, max: 20},
    TEMP: {typeSensor: "TEMP", min:25, max:40},
  };