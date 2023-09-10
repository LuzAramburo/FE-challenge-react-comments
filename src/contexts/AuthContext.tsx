/* eslint react-refresh/only-export-components: 0 */
import { createContext, useContext } from 'react';
import { IUser } from '../interfaces/user.interfaces';

type OwnerContext = {
  currentUser: IUser;
  setUser: (user: IUser) => void;
};

export const AuthContext = createContext<OwnerContext>({
  currentUser: {} as IUser,
  setUser: () => {},
});

export function useOwnerContext() {
  return useContext(AuthContext);
}
