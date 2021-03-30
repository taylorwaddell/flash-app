import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Study from "../pages/Study";
import NewDeck from "../pages/NewDeck";
import NotFound from "./NotFound";
import DeckView from "../pages/DeckView";
import EditDeck from "../pages/EditDeck";
import AddCard from "../pages/AddCard";
import EditCard from "../pages/EditCard"

function Layout() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/decks/new">
          <NewDeck />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <AddCard />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
        <Route exact path="/decks/:deckId">
          <DeckView />
        </Route>
        <Route exact path="/decks">
          <Redirect to="/" />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Layout;
