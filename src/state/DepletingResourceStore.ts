import { create } from "zustand";
import DepletingResourceDomain, {
  type IResourceState,
  type IResourceStateActions,
} from "../domain/DepletingResource";

interface IDepletingResourceStore {
  depletionTick: (delta: number) => void;
  setGeneratorStatus: (running: boolean) => void;
}

type DepletingResourceStore = IResourceState &
  IResourceStateActions &
  IDepletingResourceStore;

export const useDepletingResourceStore = create<DepletingResourceStore>()(
  (set) => ({
    ...DepletingResourceDomain.initialResourceState,
    setFuel(newFuel) {
      set((state) => {
        const result = DepletingResourceDomain.setFuel(newFuel, state);
        return {
          fuel: result,
        };
      });
    },
    setGeneratorStatus(running) {
      set(() => ({
        generatorRunning: running,
        updatedAt: new Date(),
      }));
    },
    depletionTick(delta: number) {
      set((state) => {
        const newState = DepletingResourceDomain.getCurrentState(state, delta);

        if (newState.fuel === 0) newState.generatorRunning = false;

        return {
          ...newState,
        };
      });
    },
  }),
);
