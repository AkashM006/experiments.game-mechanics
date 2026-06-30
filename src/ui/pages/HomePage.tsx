import Card from "../components/home/Card";

const ROUTES = [
  {
    id: 1,
    name: "Depleting resource",
    link: "/depleting-resource",
  },
  {
    id: 2,
    name: "Layout",
    link: "/layout",
  },
  {
    id: 3,
    name: "Chat UI",
    link: "/chat-ui",
  },
];

const HomePage = () => {
  return (
    <div className="text-center mt-2">
      <h1 className="text-4xl">Learning Game Mechanics</h1>

      <div className="mt-10 flex flex-col gap-2 items-center">
        {ROUTES.map((route) => (
          <Card key={route.id} title={route.name} url={route.link} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
