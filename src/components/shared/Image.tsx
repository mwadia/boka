import React from 'react';

const Image = ({ bgImage, title, description }: any) => {
  return (
    <div
      className='relative bg-cover bg-center bg-no-repeat h-full w-full rounded-[10px]'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='absolute lg:bottom-5 bottom-3 lg:left-[30px] left-[10px] text-white'>
        <h1 className='lg:text-[25px] text-[16px] font-[600]'>{title}</h1>
        <h1 className='lg:text-[16px] text-[12px]'>{description}</h1>
      </div>
    </div>
  );
};

export default Image;
