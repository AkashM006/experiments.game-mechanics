export interface IResourceState {
  fuel: number;
  maxFuel: number;
  updatedAt: Date;
  generatorRunning: boolean;
}

export interface IResourceStateActions {
  setFuel: (newFuel: number) => void;
}

// Amount of time take to burn one unit fuel in ms
const fuelUnitTime = 30 * 1000;

// Depletion rate: 1 unit per five seconds
const rate = 1 / fuelUnitTime;

const initialResourceState: IResourceState = {
  fuel: 10,
  maxFuel: 100,
  updatedAt: new Date(),
  generatorRunning: true,
};

const setFuel = (newFuel: number, state: IResourceState): number => {
  if (newFuel < 0) {
    return 0;
  } else if (newFuel > state.maxFuel) {
    return state.maxFuel;
  }

  return newFuel;
};

const getCurrentState = (
  state: IResourceState,
  delta: number, // in milliseconds
): IResourceState => {
  const oldFuel = state.fuel;

  const timeDelta = delta;

  const fuelUsed = timeDelta * rate;

  const newFuel = setFuel(oldFuel - fuelUsed, state);

  return {
    ...state,
    fuel: newFuel,
  };
};

const getPendingTime = (remainingFuel: IResourceState["fuel"]) => {
  return remainingFuel * fuelUnitTime;
};

const DepletingResourceDomain = {
  initialResourceState,
  setFuel,
  getCurrentState,
  getPendingTime,
};

export default DepletingResourceDomain;
