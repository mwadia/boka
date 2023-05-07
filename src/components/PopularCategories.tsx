import Image from '../components/shared/Image';
import Container from './shared/Container';
const PopularCategories = () => {
  return (
    <Container>
      <div>
        <div className='flex justify-between items-center mb-[20px]'>
          <h1 className='font-[700] text-[36px] text-businessTitle '>
            Popular Categories
          </h1>
          <h1 className='text-primary font-[500]'>View all Categories</h1>
        </div>
        <div className='h-[500px] w-full flex lg:flex-row flex-col gap-5'>
          <div className=' lg:w-1/2 w-full lg:h-full h-1/2'>
            <Image
              bgImage='./images/manicure.png'
              title='Manicure'
              description='255 Businesses'
            />
          </div>
          <div className='flex flex-col lg:w-1/2 w-full lg:h-full h-1/2 gap-5'>
            <div className=' h-1/2 w-full flex gap-5'>
              <div className=' w-1/2 flex'>
                <Image
                  bgImage='./images/pedicure.png'
                  title='Pedicure'
                  description='255 Businesses'
                />
              </div>
              <div className=' w-1/2 flex'>
                <Image
                  bgImage='./images/haircut.png'
                  title='Haircut'
                  description='255 Businesses'
                />
              </div>
            </div>
            <div className=' h-1/2  w-full flex gap-5'>
              <div className=' w-1/2 flex'>
                <Image
                  bgImage='./images/therp.png'
                  title='IV therap'
                  description='255 Businesses'
                />
              </div>
              <div className=' w-1/2 flex'>
                <Image
                  bgImage='./images/trimming.png'
                  title='Trimming'
                  description='255 Businesses'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularCategories;
