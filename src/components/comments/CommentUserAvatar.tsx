import { IUser } from '../../interfaces/comments.interfaces';

interface IProps {
  user: IUser;
}

export const CommentUserAvatar = ({ user }: IProps) => {
  return (
    <div className="bg-gray-400 rounded-full w-8 h-8 flex-shrink-0">
      <img src={user.image.webp} alt={`Profile image of ${user.username}`} />
    </div>
  );
};
