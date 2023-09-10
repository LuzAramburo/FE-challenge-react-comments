import { useCommentContext } from '../../contexts/CommentContext.tsx';
import { ItemContainer } from '../UI/ItemContainer.tsx';
import { CommentUserAvatar } from './CommentUserAvatar.tsx';
import { useOwnerContext } from '../../contexts/AuthContext.tsx';
import { useCommentDispatchContext } from '../../contexts/CommentListContext.tsx';
import { FormEvent, useState } from 'react';

type IProps = {
  parentId?: number;
  replyingTo?: string;
};

export const CommentReplyForm = ({ parentId, replyingTo }: IProps) => {
  const { setIsReplying } = useCommentContext();
  const { currentUser } = useOwnerContext();
  const dispatch = useCommentDispatchContext();

  const [replyContent, setReplyContent] = useState('');

  const replyHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (replyContent === '') return;

    if (parentId && replyingTo) {
      dispatch({
        type: 'addReply',
        payload: {
          parentId,
          id: 0,
          content: replyContent,
          createdAt: 'today',
          score: 0,
          user: currentUser,
          replyingTo: replyingTo,
        },
      });
      setIsReplying(false);
    } else {
      dispatch({
        type: 'addComment',
        payload: {
          id: 0,
          content: replyContent,
          createdAt: 'today',
          score: 0,
          user: currentUser,
          replies: [],
        },
      });
    }
  };

  return (
    <ItemContainer className="mt-1.5">
      <form className="flex items-start gap-4 mt-2 w-full" onSubmit={replyHandler}>
        <CommentUserAvatar user={currentUser} />
        <textarea
          className="w-full border border-gray-400 rounded p-2 flex-grow"
          rows={4}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder={'Add a comment...'}
          defaultValue={replyingTo && `@${replyingTo} `}
        />
        <div className="flex flex-col justify-center items-center flex-grow">
          <button
            onClick={() => replyHandler}
            type="submit"
            className="bg-primary text-white uppercase rounded py-2 px-6 hover:opacity-80"
          >
            Reply
          </button>
          {parentId && (
            <button
              onClick={() => setIsReplying(false)}
              type="button"
              className="text-primary uppercase rounded py-2 px-6 hover:opacity-80"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </ItemContainer>
  );
};
