import Container from '../shared/Container';
import TransformationImage from './TransformationImage';

const BokaTransformation = () => {
  return (
    <Container bgColor={'[#FFFAF8]'}>
      <div>
        <div className='flex justify-between w-full mb-[30px]'>
          <h1 className='font-[700] text-[36px] text-businessTitle'>
            Boka Transformation
          </h1>
          <button className='text-primary rounded-[8px] w-[120px] bg-white p-[10px] border-[1px] border-primary'>
            Book Now
          </button>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-[60px] '>
          <TransformationImage />
          <div className='flex flex-col items-start gap-5 w-full lg:w-2/5'>
            <p className='text-[20px] text-businessTitle font-[400] w-4/5'>
              "I am so happy with my facial visits. Anna has truly changed my
              skin completely. I would recommend everyone and anyone to start
              doing facials with her. I have sensitive and acne-prone skin, and
              I always leave Anna’s feeling fantastic. 10 stars!!!"
            </p>
            <div className='ml-4'>
              <h2 className=' font-bold text-[18px] text-businessTitle'>
                Mariah Anderson
              </h2>
              <p className='font-[300] text-[#6B7C80]'>Esthetician</p>
            </div>

            <h3 className='text-primary font-[400]'>Book Mariah for $99</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BokaTransformation;
