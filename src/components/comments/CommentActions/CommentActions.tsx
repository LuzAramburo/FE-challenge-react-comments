import { ActionsOwned } from './ActionsOwned.tsx';
import { ActionsViewer } from './ActionsViewer.tsx';

type Props = {
  isOwner: boolean;
  parentId?: number;
};

export const CommentActions = ({ isOwner, parentId }: Props) => {
  if (isOwner) return <ActionsOwned parentId={parentId} />;
  return <ActionsViewer />;
};
