import React from 'react';
import DeckForm from "../utils/DeckForm";
import { Link } from "react-router-dom";

function NewDeck(props) {
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
                <DeckForm />
            </div>
        </div>
    );
}

export default NewDeck;