export const SliderContent = (props) => {
  const { title, description, image, alt } = props;
  return (
    <div className="post-card">
      <div className="card">
        <img src={image} alt={alt} className="img-fluid" />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <div className="card-text">{description}</div>
          <div className="btn-group">
            <a href="/" className="btn-custom">
              Warenkorb
            </a>
            <a href="/" className="btn-custom">
              Jetzt kaufen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
