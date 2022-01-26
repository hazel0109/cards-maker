import React, { useState, useEffect, createContext, useContext } from 'react';
import AuthService from '../../service/auth_service';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unSubscribe = AuthService.onAuthChange((user) => {
      user
        ? setUser({
            id: user.uid,
            name: user.displayName || 'Hello',
            pic: user.photoURL,
          })
        : setUser({});
    });
    return () => unSubscribe();
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.id != null };
};
