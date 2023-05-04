const Category = ({ nameEn, iconUrl }: any) => {
  return (
    <div>
      <img className='w-[50px]' src={iconUrl} alt={nameEn} />
      <h4 className='mt-2 text-center sm:text-base text-[12px]'>
        {nameEn}
      </h4>
    </div>
  );
};

export default Category;
