import Card from "./Card";

const Cards = ({ cards, handleClick }) => {
  return (
    <>
      {cards?.length > 0 ? (
        <ul className="card-list">
          {cards.map((card, index) => (
            <li className="card-list-item" key={card + index}>
              <Card
                title={card.title}
                description={card.description}
                handleClick={() => handleClick(index)}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Cards;
