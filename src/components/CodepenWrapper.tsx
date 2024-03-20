export const CodepenWrapper = ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  return (
    <div className="h-full">
      <iframe
        className="rounded-md"
        height="300"
        style={{ width: "100%", height: "100%" }}
        title={title}
        src={`https://codepen.io/Mikiaela/embed/${id}?default-tab=html%2Cresult`}
        loading="lazy"
        allowTransparency={true}
        allowFullScreen
      >
        See the Pen{" "}
        <a href={`https://codepen.io/Mikiaela/pen/${id}`}>{title}</a> by Mikaela
        Gurney (<a href="https://codepen.io/Mikiaela">@Mikiaela</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
};
