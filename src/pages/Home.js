import React from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <Link to="decks/new">
          <button type="button" className="btn btn-secondary">
            Create Deck
          </button>
        </Link>
      </div>
      <div className="row">
        <DeckList />
      </div>
    </div>
  );
}

export default Home;
