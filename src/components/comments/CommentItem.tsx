import { CommentVotes } from './CommentVotes.tsx';
import { CommentUser } from './CommentUser.tsx';
import { ItemContainer } from '../UI/ItemContainer.tsx';
import { CommentActions } from './CommentActions/CommentActions.tsx';
import { useEffect, useState } from 'react';
import { CommentReply } from './CommentReply.tsx';
import { CommentContext } from '../../contexts/CommentContext.tsx';
import { IComment } from '../../interfaces/comments.interfaces';
import { useOwnerContext } from '../../contexts/AuthContext.tsx';
import { CommentRepliesContainer } from './CommentRepliesContainer.tsx';
import { CommentEdit } from './CommentEdit.tsx';

type Props = {
  comment: IComment;
};

export const CommentItem = ({ comment }: Props) => {
  const { currentUser } = useOwnerContext();
  const [isOwner, setIsOwner] = useState(false);
  const [editing, setEditing] = useState(false);
  const [replying, setReplying] = useState(false);

  useEffect(() => {
    if (comment.user.username === currentUser?.username) setIsOwner(true);
  }, [currentUser, comment]);

  return (
    <CommentContext.Provider
      value={{ comment, editing, setEditing, isOwner: isOwner, setIsOwner, replying, setReplying }}
    >
      <ItemContainer>
        <CommentVotes score={comment.score} />
        <div className="flex-grow">
          <div className="flex justify-between">
            <CommentUser />
            <CommentActions isOwner={isOwner} />
          </div>
          {!editing && <div className="mt-2 text-gray-500">{comment.content}</div>}
          {editing && <CommentEdit />}
        </div>
      </ItemContainer>
      {replying && <CommentReply />}
      {comment.replies && <CommentRepliesContainer comments={comment.replies} />}
    </CommentContext.Provider>
  );
};
