import IconMinus from '../../assets/images/icons/icon-minus.svg';
import IconPlus from '../../assets/images/icons/icon-plus.svg';

type Props = {
  score: number;
};

export const CommentVotes = ({ score }: Props) => {
  return (
    <div className="bg-blue-50 text-primary rounded font-medium mr-4 flex-shrink-0">
      <button className="bg-inherit text-inherit flex justify-center items-center rounded-t transition-colors flex-grow w-10 h-10 group active:bg-blue-200">
        <img src={IconPlus} alt="Upvote" className="opacity-30 group-hover:opacity-100" />
      </button>
      <div className="bg-inherit text-inherit py-1 flex justify-center w-10 h-10">{score}</div>
      <button className="bg-inherit text-inherit flex justify-center items-center rounded-b transition-colors flex-grow w-10 h-10 group active:bg-blue-200">
        <img src={IconMinus} alt="Downvote" className="opacity-30 group-hover:opacity-100" />
      </button>
    </div>
  );
};
