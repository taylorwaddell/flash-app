import React, { useEffect, useState } from "react";
import DeckForm from "../utils/DeckForm";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";

function NewDeck(props) {
  const params = useParams();
  const deckId = params.deckId;
  const [deck, setDeck] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        const response = await readDeck(deckId, abortController.signal);
        setDeck(response);
      } catch (err) {
        if (err.name !== "AbortError") {
          throw err;
        }
      }
    }
    loadDeck();
    return () => {
      abortController.abort();
    };
  }, [deckId]);
  
  console.log(deck);

  if (deck.name) {
  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deckId}</Link>
            </li>
            <li className="breadcrumb-item active">Edit Deck</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <DeckForm isNewDeck={false} nameValue={deck.name} descriptionValue={deck.description} deckId={deckId} />
      </div>
    </div>
  );
  } else {
    return <p>loading...</p>
  }
}

export default NewDeck;
