import Stars from './Stars';

const BusinessesReview = () => {
  const randomNum = Math.floor(Math.random() * 10);
  return (
    <div className='flex gap-4 items-center'>
      <Stars />
      <h4 className='font-light text-[#17505C] text-sm whitespace-nowrap'>
        {randomNum} Reviews
      </h4>
    </div>
  );
};

export default BusinessesReview;
