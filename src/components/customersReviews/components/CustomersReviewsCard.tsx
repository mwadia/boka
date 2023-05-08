import Stars from '../../shared/BusinessesSection/Stars';

const CustomersReviewsCard = () => {
  return (
    <div className='w-[300px] h-[300px] bg-[#F9F9F9] rounded-lg p-6'>
      <div className='flex flex-col justify-between h-full'>
        <p className='text-[18px] text-businessTitle'>
          “Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eius
          mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...”
        </p>
        <div className='flex justify-between items-center'>
          <Stars />
          <h1 className='text-businessTitle text-[18px] font-[400] italic '>
            - Jack Daniels
          </h1>
        </div>
        <div className='flex flex-row gap-3 items-center '>
          <img
            className='w-[40px] h-[40px]'
            src='./images/employee.png'
            alt='employee'
          />
          <div className='text-businessTitle'>
            <h1 className='font-[700]'>Anup Kanti Deb</h1>
            <h2 className='font-[400]'>Sylhet, Bangladesh</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersReviewsCard;
