export interface IResourceState {
  fuel: number;
  maxFuel: number;
  updatedAt: Date;
  generatorRunning: boolean;
}

interface IResourceStateActions {
  setFuel: (newFuel: number, state: IResourceState) => void;
  addFuel: (delta: number, state: IResourceState) => IResourceState;
  getCurrentState: (
    state: IResourceState,
    delta: number, // in milliseconds
  ) => IResourceState;
  getPendingTime: (remainingFuel: IResourceState["fuel"]) => number;
}

type ResourceDomain = {
  initialResourceState: IResourceState;
} & IResourceStateActions;

// Amount of time take to burn one unit fuel in ms
const fuelUnitTime = 30 * 1000;

// Depletion rate: 1 unit per five seconds
const rate = 1 / fuelUnitTime;

const initialResourceState: IResourceState = {
  fuel: 50,
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

const getPendingTime = (remainingFuel: IResourceState["fuel"]): number => {
  return remainingFuel * fuelUnitTime;
};

const addFuel = (delta: number, state: IResourceState): IResourceState => {
  const newState = { ...state };

  const newFuel = newState.fuel + delta;

  if (newFuel < 0) newState.fuel = 0;
  else if (newFuel > newState.maxFuel) newState.fuel = newState.maxFuel;
  else newState.fuel = newFuel;

  return newState;
};

const DepletingResourceDomain: ResourceDomain = {
  initialResourceState,
  setFuel,
  getCurrentState,
  getPendingTime,
  addFuel,
};

export default DepletingResourceDomain;
