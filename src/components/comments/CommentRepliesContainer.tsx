import { IReply } from '../../interfaces/comments.interfaces';
import { CommentItem } from './CommentItem.tsx';

type IProps = {
  comments: IReply[];
};
export const CommentRepliesContainer = ({ comments }: IProps) => {
  return (
    <div className="border-l-4 border-gray-200 pl-6">
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
