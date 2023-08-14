import { createContext, useContext } from 'react';
import { ICommentsList } from '../interfaces/comments.interfaces';

export const CommentsListContext = createContext<ICommentsList>({
  comments: [],
});

// eslint-disable-next-line react-refresh/only-export-components
export const useCommentListContext = () => useContext(CommentsListContext);
