import { ActionsOwned } from './ActionsOwned.tsx';
import { ActionsNotOwned } from './ActionsNotOwned.tsx';

type Props = {
  owned: boolean;
};

export const CommentActions = ({ owned }: Props) => {
  if (owned) return <ActionsOwned />;
  return <ActionsNotOwned />;
};
