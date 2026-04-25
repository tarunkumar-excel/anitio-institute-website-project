'use client';
import Image from 'next/image';

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

export default function LogoImage({ width = 44, height = 44, className = '' }: Props) {
  return (
    <Image
      src="/images/logo.png"
      alt="ANITIO Logo"
      width={width}
      height={height}
      className={className}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  );
}
