/* eslint react-refresh/only-export-components: 0 */
import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from 'react';
import { IComment, IReply } from '../interfaces/comments.interfaces';

interface ReplyPayload extends IReply {
  parentId: number;
}

interface DeletePayload {
  parentId?: number;
  commentToDeleteId: number;
}

interface UpdatePayload extends Partial<IComment> {
  parentId?: number;
}

type SetData = { type: 'setData'; payload: IComment[] };
type UpdateComment = { type: 'updateComment'; payload: UpdatePayload };
type AddComment = { type: 'addComment'; payload: IComment };
type AddReply = { type: 'addReply'; payload: ReplyPayload };
type DeleteComment = { type: 'deleteComment'; payload: DeletePayload };

type CommentActions = SetData | UpdateComment | AddComment | AddReply | DeleteComment;

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

const randomId = () => Math.floor(Math.random() * 100) + 5;

function commentsReducer(state: IComment[], action: CommentActions) {
  const { type, payload } = action;

  switch (type) {
    case 'setData':
      return payload;

    case 'addComment':
      return [...state, { ...payload, id: randomId() }];

    case 'addReply':
      return state.map((comment) => {
        if (comment.id === payload.parentId) comment.replies.push({ ...payload, id: randomId() });
        return comment;
      });

    case 'updateComment':
      if (payload.parentId) {
        const index = state.findIndex((comment) => comment.id === payload.parentId);
        const newState = [...state];
        const { id: commentId, ...updatedComment } = payload;
        newState[index].replies = newState[index].replies.map((comment) => {
          if (comment.id === commentId) return { ...comment, ...updatedComment };
          return comment;
        });
        return newState;
      } else {
        const { id: commentId, ...updatedComment } = payload;
        return state.map((comment) => {
          if (comment.id === commentId) return { ...comment, ...updatedComment };
          return comment;
        });
      }

    case 'deleteComment':
      if (payload.parentId) {
        const index = state.findIndex((comment) => comment.id === payload.parentId);
        const newState = [...state];
        newState[index].replies = newState[index].replies.filter((comment) => comment.id !== payload.commentToDeleteId);
        return newState;
      } else {
        return state.filter((comment) => comment.id !== payload.commentToDeleteId);
      }

    default:
      return state;
  }
}

export function useCommentListContext() {
  return useContext(CommentsListContext);
}

export function useCommentDispatchContext() {
  return useContext(CommentsDispatchContext) as Dispatch<CommentActions>;
}
