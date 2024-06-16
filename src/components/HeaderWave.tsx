// .project-container {
//     margin-top: 30rem;
//     height: 50rem;
//     width: 2000px;
//     position: relative;
//   }

const Wave = ({
  background,
  className,
}: {
  background: string;
  className?: string;
}) => (
  <div className={className}>
    <svg
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1067.18 404.09"
      className="duration-1000"
      fill={background}
    >
      <path d="M0,8.55C34,39.87,87.21,78.66,157.46,88.21,273.44,104,314.76,23.56,466.2,4c116.22-15,218.71,15.92,290.3,37.54,67.1,20.26,136.58,55.69,257.13,74.17,28.13,4.31,51.5,6.63,67.06,7.93V403.28L0,403.18" />
    </svg>
  </div>
);

export default Wave;
