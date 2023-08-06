import avatar from '../../assets/images/avatars/image-amyrobson.webp';

type Props = {
  owned: boolean;
};

export const CommentUser = ({ owned }: Props) => {
  return (
    <div className="flex gap-3.5 items-center">
      <div className="bg-gray-400 rounded-full w-8 h-8">
        <img src={avatar} alt="Profile image of Hoid Amaram" />
      </div>
      <span className="text-primary flex items-center gap-1.5">
        Hoid Amaram {owned && <div className="bg-primary text-white px-2 rounded-sm text-xs font-medium">you</div>}
      </span>
      <span className=" text-gray-500">1 month ago</span>
    </div>
  );
};
