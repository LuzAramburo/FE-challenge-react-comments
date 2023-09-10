import { CommentVotes } from './CommentVotes.tsx';
import { CommentUser } from './CommentUser.tsx';
import { ItemContainer } from '../UI/ItemContainer.tsx';
import { CommentActions } from './CommentActions/CommentActions.tsx';
import { useEffect, useState } from 'react';
import { CommentReplyForm } from './CommentReplyForm.tsx';
import { CommentContext } from '../../contexts/CommentContext.tsx';
import { IComment, IReply } from '../../interfaces/comments.interfaces';
import { useOwnerContext } from '../../contexts/AuthContext.tsx';
import { CommentRepliesContainer } from './CommentRepliesContainer.tsx';
import { CommentEditForm } from './CommentEditForm.tsx';

type IProps = {
  comment: IComment | IReply;
  parentId?: number;
};

export const CommentItem = ({ comment }: IProps) => {
  const { currentUser } = useOwnerContext();
  const [isOwner, setIsOwner] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  useEffect(() => {
    if (comment.user.username === currentUser?.username) setIsOwner(true);
  }, [currentUser, comment]);

  return (
    <CommentContext.Provider
      value={{
        comment,
        isEditing,
        setIsEditing,
        isOwner,
        setIsOwner,
        isReplying,
        setIsReplying,
      }}
    >
      <ItemContainer>
        <CommentVotes score={comment.score} />
        <div className="flex-grow">
          <div className="flex justify-between">
            <CommentUser />
            <CommentActions isOwner={isOwner} />
          </div>
          {!isEditing && <div className="mt-2 text-gray-500">{comment.content}</div>}
          {isEditing && <CommentEditForm />}
        </div>
      </ItemContainer>
      {isReplying && <CommentReplyForm parentId={comment.id} replyingTo={comment.user.username} />}
      {'replies' in comment && comment.replies.length > 0 && <CommentRepliesContainer comments={comment.replies} />}
    </CommentContext.Provider>
  );
};
