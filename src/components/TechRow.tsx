import clsx from 'clsx';
import { ImageProps } from 'next/image';

import NextImage from './NextImage';

type TechRowProps = {
  title: string;
  src: ImageProps['src'];
  alt: ImageProps['alt'];
  isBeginnerFriendly?: boolean;
};

const TechRow = ({
  title,
  src,
  alt,
  isBeginnerFriendly = false,
}: TechRowProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-around rounded-md p-4 shadow-md',
        { border: isBeginnerFriendly, 'border-yellow-500': isBeginnerFriendly }
      )}
    >
      <NextImage src={src} alt={alt} width={128} height={128} />
      <h4 className='mt-1 text-center'>{title}</h4>
    </div>
  );
};

export default TechRow;
