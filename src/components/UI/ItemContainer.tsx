import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const ItemContainer = ({ children, className }: Props) => {
  return <div className={`bg-white rounded-lg p-6 flex items-start mt-4 ${className}`}>{children}</div>;
};
