import Card from "../components/home/Card";

const ROUTES = [
  {
    id: 1,
    name: "Depleting resource",
    link: "/depleting-resource",
  },
];

const HomePage = () => {
  return (
    <div className="text-center mt-2">
      <h1 className="text-4xl">Learning Game Mechanics</h1>

      <div className="mt-5 flex flex-col items-center">
        {ROUTES.map((route) => (
          <Card key={route.id} title={route.name} url={route.link} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
