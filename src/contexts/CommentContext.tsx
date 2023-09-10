import { createContext, useContext } from 'react';
import { IComment, IReply } from '../interfaces/comments.interfaces';

type CommentContext = {
  comment: IComment | IReply;
  isOwner: boolean;
  setIsOwner: (value: boolean) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  isReplying: boolean;
  setIsReplying: (value: boolean) => void;
};

export const CommentContext = createContext<CommentContext>({
  comment: {} as IComment,
  isOwner: false,
  setIsOwner: () => {},
  isEditing: false,
  setIsEditing: () => {},
  isReplying: false,
  setIsReplying: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useCommentContext = () => useContext(CommentContext);
