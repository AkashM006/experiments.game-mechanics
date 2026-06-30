import { useMemo } from "react";
import DepletingResourceDomain from "../../../domain/DepletingResource";
import { useDepletingResourceStore } from "../../state/DepletingResourceStore";
import Utils from "../../../utils";

const ResourceCountDown = () => {
  const remainingFuel = useDepletingResourceStore((state) => state.fuel);

  const pendingTime = useMemo(() => {
    const pendingTimeInMs =
      DepletingResourceDomain.getPendingTime(remainingFuel);
    return Utils.formatDuration(pendingTimeInMs);
  }, [remainingFuel]);

  return (
    <div className="mt-4 mx-auto w-fit rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4">
      <div className="text-center text-xs uppercase tracking-[0.3em] text-zinc-400">
        Time Remaining
      </div>

      <div className="mt-1 font-mono text-4xl font-bold text-cyan-400 text-center">
        {pendingTime}
      </div>
    </div>
  );
};

export default ResourceCountDown;
