import { createContext, useContext } from 'react';

type CommentContext = {
  owner: boolean;
  setOwner: (value: boolean) => void;
  editing: boolean;
  setEditing: (value: boolean) => void;
};

export const CommentContext = createContext<CommentContext>({
  owner: false,
  setOwner: () => {},
  editing: false,
  setEditing: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useCommentContext = () => useContext(CommentContext);
