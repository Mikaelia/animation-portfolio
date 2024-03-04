const PotPage = ({
  children,
  instructions,
  title,
}: {
  children: React.ReactNode;
  instructions: string;
  title: string;
}) => {
  return (
    <div className="home mt-65 flex h-[calc(100vh-63px)] justify-start pb-3 pt-3">
      <div className="child-container mr-3 h-full w-full max-w-5xl overflow-hidden rounded-br-md rounded-tr-md bg-gray4 p-3">
        {children}
      </div>
      <div className="sidePanel w-1/3 rounded-bl-md rounded-tl-md border border-r-0 border-gray5 bg-gray4 p-8 text-xl font-semibold">
        <h1 className="title mb-4">{title}</h1>
        <p className="text-sm font-light">{instructions}</p>
      </div>
    </div>
  );
};

export default PotPage;
