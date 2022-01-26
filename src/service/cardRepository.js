import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';
import { firebase } from './firebase';
initializeApp(firebase);

class CardRepository {
  static db = getDatabase();
  static syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
  static saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }
  static removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card}`));
  }
}

export default CardRepository;
