import { CommentItem } from './CommentItem.tsx';
import { IComment } from '../../interfaces/comments.interfaces';

type Props = {
  comments: IComment[];
};

export const CommentList = ({ comments }: Props) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </>
  );
};
