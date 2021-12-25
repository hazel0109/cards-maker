import React, { useState, useEffect, createContext, useContext } from 'react';
import AuthService from '../../service/auth_service';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [err, setErr] = useState(null);

  useEffect(() => {
    const unSubscribe = AuthService.onAuthChange((user) => {
      user &&
        setUser({ id: user.uid, name: user.displayName, pic: user.photoURL });
    });
    return () => unSubscribe();
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  return { ...auth, isAuthenticated: auth.id != null };
};

// const login = (providerName) => {
//   AuthService.login(providerName)
//     .then((data) => {
//       updateUser(data.user);
//       setAuthed(true);
//     })
//     .catch((err) => {
//       setErr(true);
//     });
// };
