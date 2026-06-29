import { useEffect } from "react";
import { useDepletingResourceStore } from "../../state/depletingResourceStore";

const ResourceGauge = () => {
  const fuel = useDepletingResourceStore((state) => state.fuel);
  const maxFuel = useDepletingResourceStore((state) => state.maxFuel);

  const deplete = useDepletingResourceStore((state) => state.depletionTick);

  const fuelPercentage = Math.round((fuel / maxFuel) * 100);

  useEffect(() => {
    let frameId: number;
    let start: number = 0;

    const tick = (timestamp: DOMHighResTimeStamp) => {
      deplete(timestamp - start);
      start = timestamp;
      frameId = requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [deplete]);

  return (
    <div className="w-80 mx-auto rounded-xl border-2 border-cyan-500/50 bg-zinc-900 p-4 shadow-lg shadow-cyan-500/10">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          ⛽ Fuel
        </span>
        <span className="font-mono text-xl font-bold text-white">
          {fuelPercentage}%
        </span>
      </div>

      <div className="h-4 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
          style={{ width: `${fuelPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ResourceGauge;
