import { CommentVotes } from './CommentVotes.tsx';
import { CommentUser } from './CommentUser.tsx';
import { ItemContainer } from '../UI/ItemContainer.tsx';
import { CommentActions } from './CommentActions/CommentActions.tsx';
import { useEffect, useRef, useState } from 'react';
import { CommentReplyForm } from './CommentReplyForm.tsx';
import { CommentContext } from '../../contexts/CommentContext.tsx';
import { IComment, IReply } from '../../interfaces/comments.interfaces';
import { useOwnerContext } from '../../contexts/AuthContext.tsx';
import { CommentRepliesContainer } from './CommentRepliesContainer.tsx';
import { CommentEditForm } from './CommentEditForm.tsx';
import { Dialog } from '../UI/Dialog.tsx';
import { useCommentDispatchContext } from '../../contexts/CommentListContext.tsx';

type IProps = {
  comment: IComment | IReply;
  parentId?: number;
};

export const CommentItem = ({ comment, parentId }: IProps) => {
  const { currentUser } = useOwnerContext();
  const dispatch = useCommentDispatchContext();

  const [isOwner, setIsOwner] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isCanceling, setIsCanceling] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    if (comment.user.username === currentUser?.username) setIsOwner(true);
  }, [currentUser, comment]);

  const cancelDialogHandler = () => {
    setIsCanceling(false);
  };

  const acceptDialogHandler = () => {
    dispatch({
      type: 'deleteComment',
      payload: {
        parentId: parentId,
        commentToDeleteId: comment.id,
      },
    });
    setIsCanceling(false);
  };

  return (
    <CommentContext.Provider
      value={{
        comment,
        textareaRef,
        isEditing,
        setIsEditing,
        isOwner,
        setIsOwner,
        isReplying,
        setIsReplying,
        isCanceling,
        setIsCanceling,
      }}
    >
      <ItemContainer className="md:flex-row flex-wrap md:flex-nowrap justify-between items-center">
        <CommentVotes parentId={parentId} />
        <div className="flex-grow mb-4 md:mb-0">
          <div className="flex justify-between">
            <CommentUser />
            <div className="hidden md:flex">
              <CommentActions isOwner={isOwner} />
            </div>
          </div>
          {!isEditing && <div className="mt-2 text-gray-500">{comment.content}</div>}
          {isEditing && <CommentEditForm parentId={parentId} />}
        </div>
        <div className="md:hidden order-3">
          <CommentActions isOwner={isOwner} />
        </div>
      </ItemContainer>
      {isReplying && <CommentReplyForm parentId={comment.id} replyingTo={comment.user.username} />}
      {'replies' in comment && comment.replies.length > 0 && (
        <CommentRepliesContainer parentId={comment.id} comments={comment.replies} />
      )}
      {isCanceling && (
        <Dialog
          title="Delete Comment"
          content="Are you sure you want to delete this comment? This can't be undone."
          cancelTxt="No, Cancel"
          acceptTxt="Yes, Delete"
          accentColor="red"
          cancelAction={cancelDialogHandler}
          acceptAction={acceptDialogHandler}
        />
      )}
    </CommentContext.Provider>
  );
};
