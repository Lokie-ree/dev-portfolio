const Container = ({ children, className = "" }) => {
  return <div className={`container-width ${className}`}>{children}</div>;
};

export default Container;
