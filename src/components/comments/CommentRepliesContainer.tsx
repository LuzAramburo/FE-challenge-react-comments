import { IReply } from '../../interfaces/comments.interfaces';
import { CommentItem } from './CommentItem.tsx';

type IProps = {
  comments: IReply[];
  parentId?: number;
};
export const CommentRepliesContainer = ({ comments, parentId }: IProps) => {
  return (
    <div className="border-l-4 border-gray-200 pl-6">
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} parentId={parentId} />
      ))}
    </div>
  );
};
