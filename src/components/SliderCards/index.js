import "./index.css";

const SliderCards = (props) => {
  const { heading, image, description } = props;

  return (
    <li className="slider-card-container">
      <img src={image} alt={heading} className="image-size" />
      <div className="slider-content-style">
        <h1 className="slider-heading">{heading}</h1>
        <p className="description-slider">{description}</p>
      </div>
    </li>
  );
};

export default SliderCards;
