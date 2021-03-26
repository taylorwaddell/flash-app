import React, { useState } from "react";

function CardForm({
  onSubmit,
  onDone,
  deckName = "Loading...",
  initialState,
  doneButtonLabel = "Done",
}) {
  const [card, setCard] = useState(initialState);

  function handleChange({ target: { name, value } }) {
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit({ ...card });
    setCard({ front: "", back: "" });
  }
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>{deckName}: Add Card</legend>
          <div className="form-group">
            <label htmlFor="front" className="form-label">
              Front
            </label>
            <textarea
              id="front"
              name="front"
              tabIndex="1"
              placeholder="Front side of card"
              required={true}
              className="form-control mb-3"
              value={card.front}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="back" className="form-label">
              Back
            </label>
            <textarea
              id="back"
              name="back"
              tabIndex="2"
              placeholder="Back side of card"
              className="form-control mb-3"
              required={true}
              value={card.back}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-secondary mr-2"
            onClick={onDone}
            tabIndex="4"
          >
            {doneButtonLabel}
          </button>
          <button type="submit" className="btn btn-primary" tabIndex="3">
            Save
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CardForm;
