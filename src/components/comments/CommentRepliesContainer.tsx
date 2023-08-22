import { IComment } from '../../interfaces/comments.interfaces';
import { CommentItem } from './CommentItem.tsx';

type Props = {
  comments: IComment[];
};
export const CommentRepliesContainer = ({ comments }: Props) => {
  return (
    <div className="border-l-4 border-gray-200 pl-6">
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
