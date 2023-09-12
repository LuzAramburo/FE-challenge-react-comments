import IconMinus from '../../assets/images/icons/icon-minus.svg';
import IconPlus from '../../assets/images/icons/icon-plus.svg';
import { useCommentContext } from '../../contexts/CommentContext.tsx';
import { useCommentDispatchContext } from '../../contexts/CommentListContext.tsx';

type Props = {
  parentId?: number;
};

export const CommentVotes = ({ parentId }: Props) => {
  const { comment } = useCommentContext();
  const dispatch = useCommentDispatchContext();

  const voteHandler = (vote: 1 | -1) => {
    dispatch({
      type: 'updateComment',
      payload: {
        parentId,
        id: comment.id,
        score: comment.score + vote,
      },
    });
  };
  return (
    <div className="bg-blue-50 text-primary rounded font-medium mr-4 flex-shrink-0 order-2 md:order-first flex md:flex-col">
      <button
        onClick={() => voteHandler(1)}
        className="bg-inherit text-inherit flex justify-center items-center rounded-t transition-colors flex-grow w-10 h-10 group active:bg-blue-200"
      >
        <img src={IconPlus} alt="Upvote" className="opacity-30 group-hover:opacity-100" />
      </button>
      <div className="bg-inherit text-inherit py-1 flex justify-center items-center w-10 h-10">{comment.score}</div>
      <button
        onClick={() => voteHandler(-1)}
        className="bg-inherit text-inherit flex justify-center items-center rounded-b transition-colors flex-grow w-10 h-10 group active:bg-blue-200"
      >
        <img src={IconMinus} alt="Downvote" className="opacity-30 group-hover:opacity-100" />
      </button>
    </div>
  );
};
