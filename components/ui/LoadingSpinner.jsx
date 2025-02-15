const LoadingSpinner = ({ size = "lg" }) => (
  <div className="flex justify-center items-center p-4">
    <div
      className={`loading loading-spinner loading-${size} text-primary`}
    ></div>
  </div>
);

export default LoadingSpinner;
