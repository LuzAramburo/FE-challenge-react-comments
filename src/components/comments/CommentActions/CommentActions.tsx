import { ActionsOwned } from './ActionsOwned.tsx';
import { ActionsViewer } from './ActionsViewer.tsx';

type Props = {
  owned: boolean;
};

export const CommentActions = ({ owned }: Props) => {
  if (owned) return <ActionsOwned />;
  return <ActionsViewer />;
};
