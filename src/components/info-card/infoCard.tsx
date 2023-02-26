import React, { FC, ReactNode } from 'react';

type InfoCardProps = {
  children: ReactNode;
  className?: any;
  id?: any;
};

const Card: FC<InfoCardProps> = ({
  children,
  className,
  id,
}: InfoCardProps) => {
  return (
    <div
      className={` ${className} bg-white px-6 py-5 rounded-xl shadow-sm`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Card;
