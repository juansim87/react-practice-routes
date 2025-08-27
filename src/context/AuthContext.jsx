/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
  return (
    <AuthContext value={{user, setUser}}>
      {children}
    </AuthContext>
  );
};