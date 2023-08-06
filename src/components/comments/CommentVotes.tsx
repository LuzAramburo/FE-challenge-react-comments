import IconMinus from "../../assets/images/icons/icon-minus.svg";
import IconPlus from "../../assets/images/icons/icon-plus.svg";

export const CommentVotes = () => {
  return (
    <div className="bg-blue-50 text-purple-900 rounded font-medium mr-4">
      <button className="
      bg-inherit text-inherit flex justify-center items-center rounded-t transition-colors flex-grow
      w-10 h-10 group
      ">
        <img src={IconPlus} alt="Upvote" className="opacity-30 group-hover:opacity-100"/>
      </button>
      <div className="bg-inherit text-inherit py-1 flex justify-center w-10 h-10">12</div>
      <button className="
      bg-inherit text-inherit flex justify-center items-center rounded-b transition-colors flex-grow
      w-10 h-8 group
      ">
        <img src={IconMinus} alt="Downvote" className="opacity-30 group-hover:opacity-100"/>
      </button>
    </div>
  );
};
