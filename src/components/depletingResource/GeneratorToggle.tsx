import { useDepletingResourceStore } from "../../state/DepletingResourceStore";

export default function GeneratorToggle() {
  const running = useDepletingResourceStore((state) => state.generatorRunning);
  const setRunning = useDepletingResourceStore(
    (state) => state.setGeneratorStatus,
  );

  return (
    <div className="flex items-center justify-center mt-5">
      <button
        onClick={() => setRunning(!running)}
        className={`
          relative
          w-44
          h-16
          rounded-2xl
          font-bold
          text-lg
          tracking-wide
          transition-all
          duration-200
          active:scale-95
          hover:scale-105
          shadow-lg
          ${
            running
              ? "bg-red-600 hover:bg-red-500 text-white shadow-red-500/30"
              : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/30"
          }
        `}
      >
        <span className="flex items-center justify-center gap-3">
          <span
            className={`
              h-3 w-3 rounded-full
              ${running ? "bg-red-200 animate-pulse" : "bg-green-200"}
            `}
          />

          {running ? "STOP" : "START"}
        </span>
      </button>
    </div>
  );
}
