const Screen = ({ children, className = "" }) => {
  return (
    <div
      className={`min-h-[calc(100vh-4rem)] flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Screen;
