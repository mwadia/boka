const HeroLocationIndicator = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:flex-row lg:gap-4 mt-4 gap-1 lg:mb-[110px]'>
      <p className='text-white'>
        It looks like you're in Dhaka Division. Not correct?
      </p>
      <div className='flex'>
        <img
          className='w-[13px] h-[17px] mr-2'
          src='./images/icons/location-color.png'
          alt=''
        />
        <p className='text-primary'>Get current location</p>
      </div>
    </div>
  );
};

export default HeroLocationIndicator;
