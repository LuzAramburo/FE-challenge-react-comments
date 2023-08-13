import IconDelete from '@assets/images/icons/icon-delete.svg';
import IconEdit from '@assets/images/icons/icon-edit.svg';
import { useCommentContext } from '../../../store/CommentContext.tsx';

export const ActionsOwned = () => {
  const { setEditing } = useCommentContext();
  return (
    <div className="flex items-center gap-4">
      <button className="text-error flex items-center gap-1.5 hover:opacity-40">
        <img src={IconDelete} alt="Icon Delete" />
        Delete
      </button>
      <button onClick={() => setEditing(true)} className="text-primary flex items-center gap-1.5 hover:opacity-40">
        <img src={IconEdit} alt="Icon Edit" />
        Edit
      </button>
    </div>
  );
};
