import React from "react";
import { Link } from "react-router-dom";

function CardList({ deck, onCardDelete }) {
  const { cards=[] } = deck; 
  const cardList = cards.map((card, index) => {
    return (
      <li key={index} className="list-group-card ">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="card-text">{card.front}</p>
            <p className="card-text">{card.back}</p>
          </div>
          <div className="d-flex justify-content-end">
            <Link
              to={`/decks/${deck.id}/cards/${card.id}/edit`}
              className="btn btn-secondary mr-2"
            >
              Edit
            </Link>
            <Link
              to="#"
              id={card.id}
              onClick={() => onCardDelete(card.id)}
              className="btn btn-danger"
            >
              Delete
            </Link>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul className="list-group mt-2 mb-2">{cardList}</ul>
    </div>
  );
}

export default CardList;
