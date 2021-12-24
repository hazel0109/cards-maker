import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { firebaseApp } from './firebase';

class AuthService {
  static login(providerName) {
    console.log(providerName);
    let authProvider;
    if (providerName === 'Google') {
      authProvider = new GoogleAuthProvider();
    } else if (providerName === 'Github') {
      authProvider = new GithubAuthProvider();
    }

    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();
    return signInWithPopup(auth, authProvider);
  }
}

export default AuthService;
