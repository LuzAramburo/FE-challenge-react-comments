import { useCommentContext } from '../../contexts/CommentContext.tsx';

export const CommentEditForm = () => {
  const { setIsEditing, comment } = useCommentContext();
  return (
    <div className="mt-2">
      <textarea
        className="w-full border border-gray-400 rounded p-2 flex-grow"
        rows={4}
        defaultValue={comment.content}
      />
      <div className="flex justify-end mt-3">
        <button
          onClick={() => setIsEditing(false)}
          className="text-primary uppercase rounded py-2 px-6 hover:opacity-80"
        >
          Cancel
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="bg-primary text-white uppercase rounded py-2 px-6 hover:opacity-80"
        >
          Update
        </button>
      </div>
    </div>
  );
};
