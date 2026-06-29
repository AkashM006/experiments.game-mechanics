import { create } from "zustand";
import DepletingResourceDomain, {
  type IResourceState,
  type IResourceStateActions,
} from "../domain/DepletingResource";

interface IDepletingResourceStore {
  depletionTick: (delta: number) => void;
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
    depletionTick(delta: number) {
      set((state) => {
        const newState = DepletingResourceDomain.getCurrentState(state, delta);

        return {
          ...newState,
        };
      });
    },
  }),
);
