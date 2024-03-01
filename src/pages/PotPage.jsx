import Pot from "@rive/Pot";

export const PotPage = () => {
  return (
    <div className="home flex flex-col items-center p-3 font-body">
      <div className="rive-projects mb-40 mt-40 text-white">
        <h2 className="font-regular text-8xl">Rive Projects - pot page</h2>
      </div>
          <div className="child-container mb-6 h-96 w-96 overflow-hidden rounded-xl opacity-100">
              <Pot></Pot>
      </div>
    </div>
  );
};
