import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from 'react';
import { IComment } from '../interfaces/comments.interfaces';

type SetData = { type: 'setData'; payload: IComment[] };
type CommentActions = SetData;

export const CommentsListContext = createContext<IComment[] | null>(null);
export const CommentsDispatchContext = createContext<Dispatch<CommentActions> | null>(null);

type Props = {
  children: ReactNode;
};

export const CommentsProvider = ({ children }: Props) => {
  const [comments, dispatch] = useReducer(commentsReducer, []);

  const fetchJson = () => {
    fetch('./data/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: 'setData', payload: data.comments });
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <CommentsListContext.Provider value={comments}>
      <CommentsDispatchContext.Provider value={dispatch}>{children}</CommentsDispatchContext.Provider>
    </CommentsListContext.Provider>
  );
};

function commentsReducer(commentsList: IComment[], action: CommentActions) {
  const { type, payload } = action;
  switch (type) {
    case 'setData':
      return payload;
    default:
      return commentsList;
  }
}

export const useCommentListContext = () => useContext(CommentsListContext);
export const useCommentDispatchContext = () => useContext(CommentsDispatchContext);
