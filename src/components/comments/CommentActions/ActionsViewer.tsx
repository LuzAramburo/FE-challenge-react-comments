import IconReply from '../../../assets/images/icons/icon-reply.svg';
import { useCommentContext } from '../../../contexts/CommentContext.tsx';

export const ActionsViewer = () => {
  const { setReplying } = useCommentContext();

  return (
    <button onClick={() => setReplying(true)} className="flex items-center gap-2 text-primary hover:opacity-40">
      <img src={IconReply} alt="Reply icon" /> Reply
    </button>
  );
};
