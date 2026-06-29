import ResourceCountDown from "../components/depletingResource/ResourceCountDown";
import ResourceGauge from "../components/depletingResource/ResourceGauge";

const DepletingResourcePage = () => {
  return (
    <div>
      <h1 className="mt-2 text-center text-4xl">Depleting Resource</h1>

      <div className="mt-14">
        <ResourceGauge />
        <ResourceCountDown />
      </div>
    </div>
  );
};

export default DepletingResourcePage;
