import IconDelete from '@assets/images/icons/icon-delete.svg';
import IconEdit from '@assets/images/icons/icon-edit.svg';
import { useCommentContext } from '../../../contexts/CommentContext.tsx';
import { useCommentDispatchContext } from '../../../contexts/CommentListContext.tsx';

type Props = {
  parentId?: number;
};

export const ActionsOwned = ({ parentId }: Props) => {
  const { comment, setIsEditing } = useCommentContext();
  const dispatch = useCommentDispatchContext();
  const deleteHandler = () => {
    dispatch({
      type: 'deleteComment',
      payload: {
        parentId: parentId,
        commentToDeleteId: comment.id,
      },
    });
  };
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => deleteHandler()} className="text-error flex items-center gap-1.5 hover:opacity-40">
        <img src={IconDelete} alt="Icon Delete" />
        Delete
      </button>
      <button onClick={() => setIsEditing(true)} className="text-primary flex items-center gap-1.5 hover:opacity-40">
        <img src={IconEdit} alt="Icon Edit" />
        Edit
      </button>
    </div>
  );
};
