import Button from "./Button";

const Card = ({ title, description }) => {
  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="card-button-wrapper">
          <Button text="Complete" />
        </div>
      </div>
    </>
  );
};

export default Card;
