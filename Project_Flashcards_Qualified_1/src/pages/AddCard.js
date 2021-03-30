import React, { useEffect, useState } from "react";
import CardForm from "../utils/CardForm";
import { Link, useParams, useHistory } from "react-router-dom";
import { createCard, readDeck } from "../utils/api/index";

function AddCard() {
  const {deckId} = useParams();
  const [deck, setDeck] = useState({ cards: []});
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck)
  }, [deckId]);

  function submitHandler(card){
    createCard(deckId, card);
  }
  function doneHandler(){
    history.push(`/decks/${deckId}`);
  }
  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active">Add Card</li>
          </ol>
        </nav>
      </div>
      
      <CardForm initialStateDeck={deck} onSubmit={submitHandler} onDone={doneHandler} deckName={deck.name} />
    </div>
  );
}

export default AddCard;
