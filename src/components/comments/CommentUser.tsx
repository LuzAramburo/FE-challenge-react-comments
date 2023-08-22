import { IUser } from '../../interfaces/comments.interfaces';

type Props = {
  owned: boolean;
  user: IUser;
};

export const CommentUser = ({ user, owned }: Props) => {
  return (
    <div className="flex gap-3.5 items-center">
      <div className="bg-gray-400 rounded-full w-8 h-8">
        <img src={user.image.webp} alt={`Profile image of ${user.username}`} />
      </div>
      <span className="text-primary flex items-center gap-1.5">
        {user.username} {owned && <div className="bg-primary text-white px-2 rounded-sm text-xs font-medium">you</div>}
      </span>
      <span className=" text-gray-500">1 month ago</span>
    </div>
  );
};
