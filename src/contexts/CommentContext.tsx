import { createContext, useContext } from 'react';
import { IComment } from '../interfaces/comments.interfaces';

type CommentContext = {
  comment: IComment;
  isOwner: boolean;
  setIsOwner: (value: boolean) => void;
  editing: boolean;
  setEditing: (value: boolean) => void;
  replying: boolean;
  setReplying: (value: boolean) => void;
};

export const CommentContext = createContext<CommentContext>({
  comment: {} as IComment,
  isOwner: false,
  setIsOwner: () => {},
  editing: false,
  setEditing: () => {},
  replying: false,
  setReplying: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useCommentContext = () => useContext(CommentContext);
