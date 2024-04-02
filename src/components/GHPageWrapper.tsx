export const GHPageWrapper = ({ src }: { src: string }) => {
  return (
    <div className="h-full">
      <iframe src={src} width="100%" height="100%"></iframe>
    </div>
  );
};
