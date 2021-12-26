import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from 'firebase/auth';
import { firebaseApp } from './firebase';

class AuthService {
  static login(providerName) {
    let authProvider;
    if (providerName === 'Google') {
      authProvider = new GoogleAuthProvider();
    } else if (providerName === 'Github') {
      authProvider = new GithubAuthProvider();
    }
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();
    return signInWithPopup(auth, authProvider);
    // .then((result) => {
    // const credential = GithubAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // });
  }

  static logout(onOut) {
    const auth = getAuth();
    signOut(auth);
  }

  static onAuthChange(onUserChanged) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
