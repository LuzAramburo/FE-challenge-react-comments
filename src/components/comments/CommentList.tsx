import { CommentItem } from './CommentItem.tsx';
import { useCommentListContext } from '../../contexts/CommentListContext.tsx';
import { CommentReplyForm } from './CommentReplyForm.tsx';

export const CommentList = () => {
  const comments = useCommentListContext();

  return (
    <>
      {comments && comments.map((comment) => <CommentItem comment={comment} key={comment.id} />)}
      <CommentReplyForm />
    </>
  );
};
