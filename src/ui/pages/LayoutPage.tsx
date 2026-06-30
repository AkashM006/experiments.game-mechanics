const Header = () => {
  return <div className="border p-2">Header</div>;
};

const Body = () => {
  return (
    <div className="border p-2 flex-1 flex gap-2 overflow-hidden">
      <div className="border w-[30%]">Side bar</div>
      <div className="border flex-1 overflow-auto">
        <h1>Body</h1>
        <div className="h-[1220px] bg-amber-900"></div>
      </div>
    </div>
  );
};

const LayoutPage = () => {
  return (
    <div className="h-svh text-white flex flex-col gap-2 overflow-hidden">
      <Header />
      <Body />
    </div>
  );
};

export default LayoutPage;
