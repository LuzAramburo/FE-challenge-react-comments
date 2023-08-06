import IconReply from '../../../assets/images/icons/icon-reply.svg';

export const ActionsNotOwned = () => {
  return (
    <button className="flex items-center gap-2 text-primary hover:opacity-40">
      <img src={IconReply} alt="Reply icon" /> Reply
    </button>
  );
};
