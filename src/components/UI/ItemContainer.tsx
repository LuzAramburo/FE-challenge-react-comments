import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const ItemContainer = ({ children }: Props) => {
  return <div className="bg-white rounded-lg p-4 flex">{children}</div>;
};
