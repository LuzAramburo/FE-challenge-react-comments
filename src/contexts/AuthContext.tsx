import { createContext, useContext } from 'react';
import { IUser } from '../interfaces/user.interfaces.d.ts';

type OwnerContext = {
  currentUser: IUser;
  setUser: (user: IUser) => void;
};

export const AuthContext = createContext<OwnerContext>({
  currentUser: {} as IUser,
  setUser: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useOwnerContext = () => useContext(AuthContext);
