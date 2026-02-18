import React from 'react';
interface MarkerHighlightProps {
  children: React.ReactNode;
  className?: string;
}
export function MarkerHighlight({
  children,
  className = ''
}: MarkerHighlightProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-1 left-0 w-full h-1/2 bg-[#FFFF00] -z-0 transform -skew-x-12 opacity-80"
        style={{
          borderRadius: '4px'
        }}>
      </span>
    </span>);

}