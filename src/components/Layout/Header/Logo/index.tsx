import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
    <Image
        src="/images/logo/logoInt.jpeg"
        alt="logo"
        width={70}
        height={64}
        style={{ width: '80px', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      /> 
      <Image
       src="/images/logo/logoInt.jpeg"
       alt="logo"
       width={70}
       height={64}
       style={{ width: '80px', height: 'auto' }}
       quality={100}
        className='dark:block hidden'
      /> 
      
    </Link>
  );
};

export default Logo;
