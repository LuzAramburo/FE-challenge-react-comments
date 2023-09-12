import { CommentUserAvatar } from './CommentUserAvatar.tsx';
import { useCommentContext } from '../../contexts/CommentContext.tsx';

export const CommentUser = () => {
  const { comment, isOwner } = useCommentContext();
  return (
    <div className="flex gap-3.5 items-center">
      <CommentUserAvatar user={comment.user} />
      <span className="text-primary flex items-center gap-1.5">
        {comment.user.username}
        {isOwner && <div className="bg-primary text-white px-2 rounded-sm text-xs font-medium">you</div>}
      </span>
      <span className=" text-gray-500">{`${comment.createdAt}`}</span>
    </div>
  );
};
