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
    let authProvider = this.getProvider(providerName);
    // if (providerName === 'Google') {
    //   authProvider = new GoogleAuthProvider();
    // } else if (providerName === 'Github') {
    //   authProvider = new GithubAuthProvider();
    // }
    return signInWithPopup(this.auth, authProvider);
  }
  static logout() {
    signOut(this.auth);
  }
  static onAuthChange(onUserChanged) {
    onAuthStateChanged(this.auth, (user) => {
      onUserChanged(user);
    });
  }
  static getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return new GoogleAuthProvider();
      case 'Github':
        return new GithubAuthProvider();
      default:
        throw new Error(`not supported provider ${providerName}`);
    }
  }
}

export default AuthService;
