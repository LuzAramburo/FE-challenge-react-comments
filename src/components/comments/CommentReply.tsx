import { useCommentContext } from '../../contexts/CommentContext.tsx';
import { ItemContainer } from '../UI/ItemContainer.tsx';
import { CommentUserAvatar } from './CommentUserAvatar.tsx';
import { useOwnerContext } from '../../contexts/AuthContext.tsx';

export const CommentReply = () => {
  const { setReplying } = useCommentContext();
  const { currentUser } = useOwnerContext();
  return (
    <ItemContainer className="mt-1.5">
      <div className="flex items-start gap-4 mt-2 w-full">
        <CommentUserAvatar user={currentUser} />
        <textarea className="w-full border border-gray-400 rounded p-2 flex-grow" rows={4} />
        <div className="flex flex-col justify-center items-center flex-grow">
          <button
            onClick={() => setReplying(false)}
            className="bg-primary text-white uppercase rounded py-2 px-6 hover:opacity-80"
          >
            Reply
          </button>
          <button
            onClick={() => setReplying(false)}
            className="text-primary uppercase rounded py-2 px-6 hover:opacity-80"
          >
            Cancel
          </button>
        </div>
      </div>
    </ItemContainer>
  );
};
