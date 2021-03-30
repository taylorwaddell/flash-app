import React from 'react';
import DeckForm from "../utils/DeckForm";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";

function NewDeck(props) {
    const history = useHistory();
    function submitHandler(deck){
        createDeck(deck).then((saveDeck) => history.push(`/decks/${saveDeck.id}`))
    }
    function cancel(){
        history.goBack();
    }
    return (
        <div className="container">
            <div className="row">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Create Deck</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <DeckForm onCancel={cancel} onSubmit={submitHandler} />
            </div>
        </div>
    );
}

export default NewDeck;