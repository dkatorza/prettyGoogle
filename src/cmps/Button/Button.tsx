import { HTMLAttributes } from 'react';
import React from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'lollipop' | 'success';
  shape?: 'fancy' | 'regular';
}

export const Button = ({
  children,
  variant = 'primary',
  shape = 'regular',
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={`btn ${variant} ${shape}`}>
      {children}
    </button>
  );
};
