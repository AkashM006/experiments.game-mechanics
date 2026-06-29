export interface IResourceState {
  fuel: number;
  maxFuel: number;
  updatedAt: Date;
}

export interface IResourceStateActions {
  setFuel: (newFuel: number) => void;
}

const initialResourceState: IResourceState = {
  fuel: 50,
  maxFuel: 100,
  updatedAt: new Date(),
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
  const rate = 1 / (5 * 1000);

  const timeDelta = delta;

  const fuelUsed = timeDelta * rate;

  const newFuel = setFuel(oldFuel - fuelUsed, state);

  return {
    ...state,
    fuel: newFuel,
  };
};

const DepletingResourceDomain = {
  initialResourceState,
  setFuel,
  getCurrentState,
};

export default DepletingResourceDomain;
