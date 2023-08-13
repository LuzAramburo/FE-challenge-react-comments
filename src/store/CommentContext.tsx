import { createContext, useContext } from 'react';

type CommentContext = {
  editing: boolean;
  setEditing: (value: boolean) => void;
};

export const CommentContext = createContext<CommentContext>({
  editing: false,
  setEditing: () => {},
});

export const useCommentContext = () => useContext(CommentContext);
