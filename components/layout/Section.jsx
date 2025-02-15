const Section = ({ children, id, className = "", containerWidth = true }) => {
  return (
    <section
      id={id}
      className={`section-padding section-bg border-t border-t-primary ${className}`}
    >
      {containerWidth ? (
        <div className="container-width">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
