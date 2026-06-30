import GeneratorStatus from "../components/depletingResource/GeneratorStatus";
import ResourceCountDown from "../components/depletingResource/ResourceCountDown";
import ResourceGauge from "../components/depletingResource/ResourceGauge";
import GeneratorToggle from "../components/depletingResource/GeneratorToggle";
import useResourceDepletion from "../hooks/useResourceDepletion";
import ResourceActions from "../components/depletingResource/ResourceActions";

const DepletingResourcePage = () => {
  useResourceDepletion();

  return (
    <div>
      <h1 className="mt-2 text-center text-4xl">Depleting Resource</h1>

      <div className="mt-14">
        <GeneratorStatus />
        <ResourceGauge />
        <ResourceCountDown />
        <GeneratorToggle />
        <ResourceActions />
      </div>
    </div>
  );
};

export default DepletingResourcePage;
