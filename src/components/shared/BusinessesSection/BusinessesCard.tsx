import BusinessesCardSlider from './BusinessesCardSlider';
import BusinessesReview from './BusinessesReview';

const BusinessesCard = ({ nameEn, businessImages }: any) => {
  return (
    <div className='mr-[20px] max-w-[300px] relative hover:translate-y-[-10px] transition duration-150 ease-out'>
      <BusinessesCardSlider businessImages={businessImages} />
      <h2 className='text-businessTitle font-bold truncate text-base'>
        {nameEn}
      </h2>
      <BusinessesReview />
      <button
        disabled
        className='border-2 border-primary rounded-lg w-full text-primary py-1 text-xs'
      >
        Business
      </button>
      <div>react select</div>
      <div>times</div>
    </div>
  );
};

export default BusinessesCard;
