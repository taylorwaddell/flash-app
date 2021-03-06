import { deleteDeck, deleteCard } from "./api/index";

export default async function handleDelete(isDeck, id) {
    const abortController = new AbortController();
    if (isDeck) {
      deleteDeck(id, abortController.signal);  
    } else {
      deleteCard(id, abortController.signal)  
    };
}