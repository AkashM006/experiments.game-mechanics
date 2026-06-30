import { create } from "zustand";
import type { IResourceState } from "../../domain/DepletingResource";
import DepletingResourceDomain from "../../domain/DepletingResource";

interface IDepletingResourceStore {
  depletionTick: (delta: number) => void;
  setGeneratorStatus: (running: boolean) => void;
  addFuel: (delta: number) => void;
}

type DepletingResourceStore = IResourceState & IDepletingResourceStore;

export const useDepletingResourceStore = create<DepletingResourceStore>()(
  (set) => ({
    ...DepletingResourceDomain.initialResourceState,
    addFuel(delta) {
      set((state) => {
        return DepletingResourceDomain.addFuel(delta, state);
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
