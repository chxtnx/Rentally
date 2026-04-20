const Title = ({ subtitle, title, align = "center" }) => {
  return (
    <div className={`fleet-header ${align}`}>
      {subtitle && (
        <p className="fleet-subtitle">{subtitle}</p>
      )}

      <h2
        className="fleet-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default Title;