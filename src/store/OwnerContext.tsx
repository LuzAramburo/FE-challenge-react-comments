import { createContext, useContext } from 'react';

type OwnerContext = {
  owned: boolean;
  setOwned: (owned: boolean) => void;
};

export const OwnerContext = createContext<OwnerContext>({
  owned: false,
  setOwned: () => {},
});

export const useOwnerContext = () => useContext(OwnerContext);
