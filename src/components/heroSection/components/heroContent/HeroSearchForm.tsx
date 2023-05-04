const HeroSearchForm = () => {
  return (
    <form className='lg:flex-row flex flex-col gap-2 w-[90%] md:w-[80%] justify-center m-auto lg:gap-4 mt-3 font-[500]'>
      <div className='lg:flex-row flex flex-col gap-2 lg:bg-white rounded-lg lg:py-1 lg:p-4 lg:items-center'>
        <div className='flex lg:flex-col lg:px-0 bg-white lg:w-fit py-2 px-4 rounded-lg justify-between w-full lg:bg-transparent'>
          <div className='w-1/2 flex items-center lg:w-fit gap-2'>
            <input className='rounded-none' type='checkbox' />
            <label className='text-sm whitespace-nowrap'>At home</label>
          </div>
          <img
            className='mr-3 lg:mr-0 block lg:hidden'
            src='./images/icons/line.png'
          />
          <div className='w-1/2 flex items-center lg:w-fit gap-2'>
            <input className='rounded-none ' type='checkbox' />
            <label className='text-sm whitespace-nowrap'>Business</label>
          </div>
        </div>
        <img className='hidden lg:block' src='./images/icons/line.png' />

        <div className='flex bg-white py-2 px-4 lg:px-0 rounded-lg justify-between w-full lg:bg-transparent'>
          <div className='flex w-1/2 items-center lg:w-fit'>
            <img
              className='w-[17px] h-[17px] mr-2'
              src='./images/icons/calender.png'
              alt='calender'
            />
            <h4>Today</h4>
          </div>
          <img className='mr-3 lg:mr-0' src='./images/icons/line.png' />

          <div className='flex w-1/2 items-center lg:w-fit'>
            <img
              className='w-[17px] h-[17px] mr-2'
              src='./images/icons/clock.png'
              alt='clock'
            />
            <h4>Now</h4>
          </div>
        </div>
        <img className='hidden lg:block' src='./images/icons/line.png' />
        <div className='flex bg-white py-6 px-4 lg:py-4 lg:px-0 lg:w-fit rounded-lg w-full lg:bg-transparent'>
          <img
            className='w-[13px] h-[17px] mr-2'
            src='./images/icons/location.png'
            alt='location'
          />
          <h4 className='text-sm whitespace-nowrap lg:min-w-[110px]'>
            Los angeles
          </h4>
        </div>
      </div>
      <div className='flex bg-white  items-center md:mx-0 lg:py-2 px-6 rounded-lg h-full lg:mt-0'>
        <img
          className='w-[17px] h-[17px] mr-2'
          src='./images/icons/search.png'
          alt='search'
        />
        <input className='w-full py-3' type='text' placeholder='Hair Salon' />
      </div>
      <button className='bg-primary text-white py-5 px-5 rounded-lg w-full lg:w-[100px] font-[600]'>
        Search
      </button>
    </form>
  );
};

export default HeroSearchForm;
