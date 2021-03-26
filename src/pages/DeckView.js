import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, deleteCard, deleteDeck } from "../utils/api/index";
import CardList from "./CardList";

function DeckView() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });
  const history = useHistory();

  useEffect(loadDeck, [deckId]);

  function loadDeck() {
    readDeck(deckId).then(setDeck);
  }

  function handleDelClick() {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deck.id).then(() => history.push("/decks"));
    }
  }

  function deleteCardHandler(cardId) {
    const confirmed = window.confirm(
      "Delete this card?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteCard(cardId).then(loadDeck);
    }
  }
  
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">{deck.name}</li>
        </ol>
      </nav>
      <div className="container">
        <div className="row">
          <h4>{deck.name}</h4>
        </div>
        <div className="row mb-2">
          <h6 className="">{deck.description}</h6>
        </div>
        <div className="row mb-4">
          <Link to={`/decks/${deck.id}/edit`} className="btn btn-warning mr-2">
            Edit
          </Link>
          <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">
            Study
          </Link>
          <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-secondary mr-2">
            Add Cards
          </Link>
          <button onClick={handleDelClick} className="btn btn-danger">
            Delete
          </button>
        </div>
        <div className="row">
          <h2>Cards</h2>
        </div>
        <div className="row">
          <div className="col col-12 mb-4">
            <CardList deck={deck} onCardDelete={deleteCardHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeckView;
