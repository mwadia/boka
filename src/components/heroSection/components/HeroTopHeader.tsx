const HeroTopHeader = () => {
  return (
    <div className='md:flex hidden  justify-between text-white font-[300]'>
      <div className='flex gap-7 items-center'>
        <img
          className='w-[15px] h-[15px]'
          src='./images/icons/insta.png'
          alt=''
        />
        <img
          className='w-[15px] h-[15px]'
          src='./images/icons/youtube.png'
          alt=''
        />
        <img
          className='w-[15px] h-[15px]'
          src='./images/icons/facebook.png'
          alt=''
        />
        <div className='flex text-center items-center gap-1'>
          <img
            className='w-[15px] h-[15px]'
            src='./images/icons/phone.png'
            alt=''
          />
          <p className='block'>+1 985 983 9823</p>
        </div>
      </div>
      <div className='flex gap-4'>
        <h2>For Business</h2>
        <h1> | </h1>
        <h2>Help</h2>
        <h1> | </h1>
        <h2>EN</h2>
      </div>
    </div>
  );
};

export default HeroTopHeader;
