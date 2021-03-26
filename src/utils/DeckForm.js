import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../utils/api/index";

function DeckForm({
  isNewDeck = true,
  nameValue = "",
  descriptionValue = "",
  deckId = 1,
}) {
  const abortController = new AbortController();
  const [deckName, setDeckName] = useState(nameValue);
  const [deckDescription, setDeckDescription] = useState(descriptionValue);
  const [newDeck, setNewDeck] = useState({ name: "", description: "" });
  const history = useHistory();

  function handleChange(event) {
    if (event.target.name === "name") {
      setDeckName(event.target.value);
    } else {
      setDeckDescription(event.target.value);
    }
  }

  useEffect(() => {
    if (isNewDeck) {
      setNewDeck(() => {
        return { ...newDeck, name: deckName, description: deckDescription };
      });
    } else {
      setNewDeck(() => {
        return {
          ...newDeck,
          name: deckName,
          description: deckDescription,
          id: deckId,
        };
      });
    }
  }, [deckName, deckDescription]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isNewDeck) {
      const newDeckUrl = await createDeck(newDeck, abortController.signal);
      history.push(`/decks/${newDeckUrl.id}`);
    } else {
      const updatedDeck = await updateDeck(newDeck, abortController.signal);
      history.push(`/decks/${deckId}`);
    }
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={handleChange}
          placeholder="Great deck names are short and memorable."
          className="form-control mb-3"
          type="text"
          name="name"
          value={deckName}
          required
        />
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          onChange={handleChange}
          placeholder="Great deck descriptions aren't short or memorable."
          value={deckDescription}
          className="form-control mb-3"
          name="description"
          required
        />
        <Link className="btn btn-secondary mr-2" to="/">
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DeckForm;
