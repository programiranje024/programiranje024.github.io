export interface ReviewProps {
  name: string;
  rating: number;
  comment: string;
  serviceType: 'tutoring' | 'course';
  serviceName: string;
  date: Date;
}

const Review = ({
  name,
  rating,
  comment,
  serviceType = 'tutoring',
  serviceName,
  date,
}: ReviewProps) => {
  return (
    <div className='h-fit rounded-md border border-gray-300 px-4 py-1 shadow-md dark:border-gray-700'>
      <div className='flex flex-col'>
        <p className='font-semibold'>{name}</p>

        <div className='relative right-[3px] flex items-center'>
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 ${
                i < rating ? 'text-yellow-500' : 'text-gray-400'
              }`}
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 12.585l-4.243 2.415 1.024-4.735L2.93 7.585l4.75-.41L10 2l2.32 5.175 4.75.41-3.85 2.68 1.024 4.735L10 12.585z'
                clipRule='evenodd'
              />
            </svg>
          ))}
        </div>

        <p className='text-sm text-gray-500 dark:text-gray-400'>
          {date.toLocaleDateString('sr-Latn-RS', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>

        <div className='flex items-center gap-1'>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            {serviceType === 'tutoring' ? 'Čas' : 'Kurs'}, {serviceName}
          </p>
        </div>

        <p className='my-2' style={{ overflowWrap: 'break-word' }}>
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Review;
