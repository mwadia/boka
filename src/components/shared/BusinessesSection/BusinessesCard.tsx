import BusinessesCardSlider from './BusinessesCardSlider';
import BusinessesReview from './BusinessesReview';
import BusinessesSelect from './BusinessesSelect';
import BusinessesTimes from './BusinessesTimes';

const BusinessesCard = ({ nameEn, businessImages, services }: any) => {
  return (
    <div className='flex flex-col mr-[20px] w-[300px] h-[427px] rounded-[12px] border-[1px] border-[#CBE0E4] relative hover:translate-y-[-10px] transition duration-150 ease-out'>
      <BusinessesCardSlider businessImages={businessImages} />
      <div className='p-3 flex flex-col justify-around h-full'>
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
        <BusinessesSelect services={services} />
        <BusinessesTimes />
        <div className='text-right font-bold text-[20px] text-businessTitle'>
          <h1>$65</h1>
        </div>
      </div>
    </div>
  );
};

export default BusinessesCard;
