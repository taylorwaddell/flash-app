import React, { useState } from "react";
function CardForm({
  onSubmit,
  onDone,
  deckName = "Loading...",
  initialState,
  doneButtonLabel = "Done",
}) {
  const [card, setCard] = useState(initialState);
  function changeHandler({ target: { name, value } }) {};
  function submitHandler(e){
    e.preventDefault();
    e.stopPropagation();
    onSubmit({ ...card });
    setCard({ front: "", back: "" })
  };
  return(      
    <form onSubmit={submitHandler} className="card-edit">
      <fieldset>
        <legend>{deckName}: Add Card</legend>
          <div className="form-group">
            <label htmlFor="name">Front</label>
            <textarea
                id="front"
                tabIndex="1"
                name="front"
                value={card.front}
                required={true}
                className="form-group"
                placeholder="Front side of card"
                onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="back">Back</label>
            <textarea 
                id="back"
                tabIndex="2"
                name="back"
                className="form-group"
                required={true}
                placeholder="Back side of card"
                value={card.back}
                onChange={changeHandler}
            />
          </div>
        <button type="button" className="btn btn-secondary mr-2" onClick={onDone} tabIndex="4">{doneButtonLabel}</button>
        <button type="submit" className="btn btn-primary" tabIndex="3">Save</button>
      </fieldset>
    </form>
  )
};
export default CardForm;