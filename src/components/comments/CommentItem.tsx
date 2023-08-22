import { CommentVotes } from './CommentVotes.tsx';
import { CommentUser } from './CommentUser.tsx';
import { ItemContainer } from '../UI/ItemContainer.tsx';
import { CommentActions } from './CommentActions/CommentActions.tsx';
import { useEffect, useState } from 'react';
import { CommentForm } from './CommentForm.tsx';
import { CommentContext } from '../../contexts/CommentContext.tsx';
import { IComment } from '../../interfaces/comments.interfaces';
import { useOwnerContext } from '../../contexts/AuthContext.tsx';
import { CommentRepliesContainer } from './CommentRepliesContainer.tsx';

type Props = {
  comment: IComment;
};

export const CommentItem = ({ comment }: Props) => {
  const { currentUser } = useOwnerContext();
  const [editing, setEditing] = useState(false);
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    if (comment.user.username === currentUser?.username) setOwner(true);
  }, [currentUser, comment]);

  return (
    <CommentContext.Provider value={{ editing, setEditing, owner, setOwner }}>
      <ItemContainer>
        <CommentVotes score={comment.score} />
        <div className="flex-grow">
          <div className="flex justify-between">
            <CommentUser user={comment.user} owned={owner} />
            <CommentActions owned={owner} />
          </div>
          {!editing && <div className="mt-2 text-gray-500">{comment.content}</div>}
          {editing && <CommentForm commentText={comment.content} />}
        </div>
      </ItemContainer>
      {comment.replies && <CommentRepliesContainer comments={comment.replies} />}
    </CommentContext.Provider>
  );
};
