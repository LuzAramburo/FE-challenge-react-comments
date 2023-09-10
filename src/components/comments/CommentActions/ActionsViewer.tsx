import IconReply from '../../../assets/images/icons/icon-reply.svg';
import { useCommentContext } from '../../../contexts/CommentContext.tsx';
import { useEffect } from 'react';

export const ActionsViewer = () => {
  const { isReplying, setIsReplying, textareaRef } = useCommentContext();

  const replyHandler = () => {
    setIsReplying(true);
  };

  useEffect(() => {
    if (isReplying && textareaRef?.current) {
      textareaRef.current.focus();
      const text = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(text, text);
    }
  }, [isReplying, textareaRef]);

  return (
    <button onClick={() => replyHandler()} className="flex items-center gap-2 text-primary hover:opacity-40">
      <img src={IconReply} alt="Reply icon" /> Reply
    </button>
  );
};
