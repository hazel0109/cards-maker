import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from 'firebase/auth';
import { firebase } from './firebase';
initializeApp(firebase);

class AuthService {
  static auth = getAuth();
  static login(providerName) {
    let authProvider;
    if (providerName === 'Google') {
      authProvider = new GoogleAuthProvider();
    } else if (providerName === 'Github') {
      authProvider = new GithubAuthProvider();
    }
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    return signInWithPopup(this.auth, authProvider);
    // .then((result) => {
    // const credential = GithubAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // });
  }

  static logout(onOut) {
    signOut(this.auth);
  }

  static onAuthChange(onUserChanged) {
    onAuthStateChanged(this.auth, (user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
