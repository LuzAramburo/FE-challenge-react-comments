import { createContext, useContext } from 'react';
import { ICurrentUser } from '../interfaces/user.interfaces';

type OwnerContext = {
  currentUser: ICurrentUser | null;
  setUser: (user: ICurrentUser) => void;
};

export const AuthContext = createContext<OwnerContext>({
  currentUser: null,
  setUser: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useOwnerContext = () => useContext(AuthContext);
