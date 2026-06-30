import { useDepletingResourceStore } from "../../state/DepletingResourceStore";

const ResourceActions = () => {
  const addFuel = useDepletingResourceStore((state) => state.addFuel);

  const handleAddFuel = () => {
    addFuel(10);
  };
  const handleUseFuel = () => {
    addFuel(-10);
  };

  return (
    <div className="flex gap-4 mx-auto mt-5 w-fit">
      {/* Add Fuel */}
      <button
        onClick={handleAddFuel}
        className="
      px-6
      py-3
      rounded-xl
      bg-amber-500
      hover:bg-amber-400
      active:scale-95
      transition-all
      font-bold
      tracking-wide
      text-neutral-900
      shadow-[0_0_20px_rgba(245,158,11,0.35)]
    "
      >
        ⛽ +10 Fuel
      </button>

      {/* Consume Fuel */}
      <button
        onClick={handleUseFuel}
        className="
      px-6
      py-3
      rounded-xl
      bg-sky-600
      hover:bg-sky-500
      active:scale-95
      transition-all
      font-bold
      tracking-wide
      text-white
      shadow-[0_0_20px_rgba(2,132,199,0.35)]
    "
      >
        ⚙ Use -10 Fuel
      </button>
    </div>
  );
};

export default ResourceActions;
