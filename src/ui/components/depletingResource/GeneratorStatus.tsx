import { useDepletingResourceStore } from "../../state/DepletingResourceStore";

const GeneratorStatus = () => {
  const running = useDepletingResourceStore((state) => state.generatorRunning);

  return (
    <h2 className="text-2xl font-bold tracking-widest uppercase text-center">
      {running ? (
        <span className="text-emerald-400">⚡ GENERATOR ONLINE</span>
      ) : (
        <span className="text-red-400">⏹ GENERATOR OFFLINE</span>
      )}
    </h2>
  );
};

export default GeneratorStatus;
