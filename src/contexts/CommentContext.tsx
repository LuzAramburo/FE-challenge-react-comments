/* eslint react-refresh/only-export-components: 0 */
import { createContext, MutableRefObject, useContext } from 'react';
import { IComment, IReply } from '../interfaces/comments.interfaces';

type CommentContext = {
  comment: IComment | IReply;
  textareaRef: MutableRefObject<HTMLTextAreaElement | null> | null;
  isOwner: boolean;
  setIsOwner: (value: boolean) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  isReplying: boolean;
  setIsReplying: (value: boolean) => void;
};

export const CommentContext = createContext<CommentContext>({
  comment: {} as IComment,
  textareaRef: null,
  isOwner: false,
  setIsOwner: () => {},
  isEditing: false,
  setIsEditing: () => {},
  isReplying: false,
  setIsReplying: () => {},
});

export function useCommentContext() {
  return useContext(CommentContext);
}
