const BusinessesReview = () => {
  const randomNum = Math.floor(Math.random() * 10);
  const star = (
    <img className='w-[14px] h-[13px]' src='./images/star.png' alt='star' />
  );
  const stars = new Array(5).fill(star);

  return (
    <div className='flex gap-4 items-center'>
      <div className='flex'>{stars}</div>
      <h4 className='font-light text-[#17505C] text-sm whitespace-nowrap'>
        {randomNum} Reviews
      </h4>
    </div>
  );
};

export default BusinessesReview;
