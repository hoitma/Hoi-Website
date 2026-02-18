import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:pointer-events-none rounded-full';
  const variants = {
    primary:
    'bg-[#FFFF00] text-black hover:bg-[#E6E600] border-2 border-transparent',
    outline: 'bg-white text-black border-2 border-black hover:bg-gray-50',
    ghost: 'bg-transparent text-black hover:bg-gray-100'
  };
  const sizes = {
    sm: 'h-8 px-4 text-xs',
    md: 'h-10 px-6 text-sm',
    lg: 'h-12 px-8 text-base'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}>

      {children}
    </button>);

}