import Button from "./Button";

const Card = ({ title, description, handleClick }) => {
  return (
    <>
      <div className="card">
        <h2>
          <b>{title}</b>
        </h2>
        <p>
          {description.length > 80
            ? `${description.substring(0, 80)}...`
            : description}
        </p>
        <div className="card-button-wrapper">
          <Button onClick={handleClick} text="Complete" />
        </div>
      </div>
    </>
  );
};

export default Card;
