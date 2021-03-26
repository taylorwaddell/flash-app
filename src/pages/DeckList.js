import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api/index";
import { Link } from "react-router-dom";
import areYouSure from "./confirmFunc";
import handleDelete from "../utils/handleDelete";

function DeckList() {
  const [decks, setDecks] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0);

  useEffect(loadDecks, []);

  function loadDecks() {
    listDecks().then(setDecks);
  }

  function handleDelClick(e) {
    if (areYouSure("deck")) {
      handleDelete(true, e.target.id);
      setDeleteCount((current) => current + 1);
    }
  }

  const deckList = decks.map((item, index) => {
    return (
      <li key={index} className="list-group-item ">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <span className="badge bg-warning rounded-pill">
            {item.cards.length} cards
          </span>
          <p className="card-text">{item.description}</p>
          <Link to={`decks/${item.id}`} className="btn btn-secondary mr-2">
            View
          </Link>
          <Link to={`decks/${item.id}/study`} className="btn btn-primary mr-2">
            Study
          </Link>
          <button
            onClick={handleDelClick}
            id={item.id}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </li>
    );
  });

  if (decks) {
    return (
      <div>
        <ul className="list-group mt-2 mb-2">{deckList}</ul>
      </div>
    );
  } else {
    <p>loading...</p>
  }
}

export default DeckList;
