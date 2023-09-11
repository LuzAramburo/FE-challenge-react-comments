import { useCommentContext } from '../../contexts/CommentContext.tsx';
import { MutableRefObject, useRef } from 'react';
import { useCommentDispatchContext } from '../../contexts/CommentListContext.tsx';

type IProps = {
  parentId?: number;
};

export const CommentEditForm = ({ parentId }: IProps) => {
  const { setIsEditing, comment } = useCommentContext();
  const dispatch = useCommentDispatchContext();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const updateHandler = () => {
    setIsEditing(false);
    dispatch({
      type: 'updateComment',
      payload: {
        parentId,
        id: comment.id,
        content: (textareaRef as MutableRefObject<HTMLTextAreaElement | null>)?.current?.value,
      },
    });
  };
  return (
    <div className="mt-2">
      <textarea
        ref={textareaRef}
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
          onClick={() => updateHandler()}
          className="bg-primary text-white uppercase rounded py-2 px-6 hover:opacity-80"
        >
          Update
        </button>
      </div>
    </div>
  );
};
