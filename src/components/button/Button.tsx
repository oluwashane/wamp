import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: JSX.Element;
  link?: string;
  className?: string;
};

export const Button = ({
  children,
  type,
  isLoading,
  isDisabled,
  onClick,
  icon,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`px-5 py-3 rounded-lg text-sm font-semibold ${className} hover:shadow-xl active:scale-90 
        transition duration-150`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({
  children,
  type,
  isDisabled,
  isLoading,
  onClick,
  icon,
  link,
  className,
}: ButtonProps) => {
  return (
    <Link href={link ?? '#'}>
      <button
        className={`px-5 py-3 rounded-lg text-sm font-semibold ${className} hover:shadow-xl active:scale-90 
        transition duration-150`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};
