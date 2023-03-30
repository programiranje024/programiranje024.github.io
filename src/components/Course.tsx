import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

import NextImage from './NextImage';

type CourseProps = {
  title: string;
  image: ImageProps['src'];
  description: ReactNode;
  duration: string;
  members: number;
  mentor: string;
  price: number;
};

const Course = ({
  title,
  image,
  duration,
  description,
  price,
  members,
  mentor,
}: CourseProps) => {
  return (
    <div className='mt-4 grid grid-cols-1 gap-4 rounded-md shadow md:grid-cols-2'>
      <div className='flex items-center justify-center'>
        <NextImage src={image} alt={title} width={512} height={512} />
      </div>
      <div className='flex flex-col items-start gap-1 rounded-md bg-white p-4'>
        <h3 className='mb-3 text-lg font-bold'>{title}</h3>
        <p className='text-gray-500'>Instruktor: {mentor}</p>
        <p className='text-gray-500'>Trajanje: {duration}</p>
        <p className='text-gray-500'>Cena po osobi: {price} RSD</p>
        <p className='text-gray-500'>Broj učesnika: {members}</p>
        <div className='mt-3 max-w-xl text-left'>{description}</div>
      </div>
    </div>
  );
};

export default Course;
