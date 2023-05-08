const Stars = () => {
  const star = (
    <img className='w-[14px] h-[13px]' src='./images/star.png' alt='star' />
  );
  const stars = new Array(5).fill(star);

  return (
    <div>
      <div className='flex'>{stars}</div>
    </div>
  );
};

export default Stars;
