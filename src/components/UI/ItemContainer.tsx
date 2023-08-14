import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const ItemContainer = ({ children }: Props) => {
  return <div className="bg-white rounded-lg p-6 flex items-start mt-4 drop-shadow">{children}</div>;
};
