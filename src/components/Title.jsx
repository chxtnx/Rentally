const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      {subtitle && <p className="fleet-subtitle">{subtitle}</p>}
      
      <h2 className="fleet-title">
        {title}
      </h2>
    </div>
  );
};

export default Title;