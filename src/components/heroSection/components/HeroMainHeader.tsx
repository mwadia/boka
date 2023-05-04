const HeroMainHeader = () => {
  return (
    <div className='flex justify-between md:pt-[32px] sm:pt-[0px] pt-[32px]'>
      <div>
        <img className='hidden md:block' src='./images/logo.png' alt='logo' />
      </div>
      <div className='flex gap-[10px]'>
        <button className='text-primary rounded-[8px] w-[120px] bg-white p-[10px]'>
          Sign Up
        </button>
        <button className='border rounded-[8px] text-white p-[10px] w-[120px]'>
          login
        </button>
      </div>
    </div>
  );
};

export default HeroMainHeader;
