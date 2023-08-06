import IconDelete from '@assets/images/icons/icon-delete.svg';
import IconEdit from '@assets/images/icons/icon-edit.svg';

export const ActionsOwned = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="text-error flex items-center gap-1.5 hover:opacity-40">
        <img src={IconDelete} alt="Icon Delete" />
        Delete
      </button>
      <button className="text-primary flex items-center gap-1.5 hover:opacity-40">
        <img src={IconEdit} alt="Icon Edit" />
        Edit
      </button>
    </div>
  );
};
