type Props = {
  children: React.ReactNode;
};
const Card = ({ children }: Props) => {
  return (
    // <div className="card group relative cursor-pointer rounded-3xl border border-gray2 border-opacity-65  bg-gray3 bg-opacity-65 p-6 duration-500 ease-in-out hover:scale-[1.01] hover:border-opacity-100 hover:bg-opacity-100">
    <div className="card card group relative m-6 h-full cursor-pointer rounded-3xl text-left duration-500 ease-in-out hover:scale-[1.01]">
      {children}
    </div>
  );
};

export default Card;
