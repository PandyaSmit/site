import Image from 'next/image';

export default function Logo() {
  return (
    <Image 
      src="/favicon.png" 
      alt="SP Logo" 
      width={40} 
      height={40} 
      className="nav-logo-image" 
    />
  );
}
