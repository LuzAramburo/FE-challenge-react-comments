import { ActionsOwned } from './ActionsOwned.tsx';
import { ActionsViewer } from './ActionsViewer.tsx';

type Props = {
  isOwner: boolean;
};

export const CommentActions = ({ isOwner }: Props) => {
  if (isOwner) return <ActionsOwned />;
  return <ActionsViewer />;
};
