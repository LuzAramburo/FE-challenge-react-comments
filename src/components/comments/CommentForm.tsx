import { useCommentContext } from '../../store/CommentContext.tsx';

interface Props {
  commentText: string;
}

export const CommentForm = ({ commentText }: Props) => {
  const { setEditing } = useCommentContext();
  return (
    <div className="flex items-start gap-4 mt-2">
      <textarea className="w-full border border-gray-400 rounded p-2 flex-grow" rows={4} defaultValue={commentText} />
      <div className="flex flex-col justify-center items-center flex-shrink-0">
        <button
          onClick={() => setEditing(false)}
          className="bg-primary text-white uppercase rounded py-2 px-6 hover:opacity-80"
        >
          Reply
        </button>
        <button onClick={() => setEditing(false)} className="text-primary uppercase rounded py-2 px-6 hover:opacity-80">
          Cancel
        </button>
      </div>
    </div>
  );
};
