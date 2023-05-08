// import customersDataContent from './customersData';

import Container from '../shared/Container';
import CustomersReviewsCard from './components/CustomersReviewsCard';

const CustomersReviews = () => {
  // console.log(customersDataContent);

  // const { praise, reviewInformations, employee }: any = customersDataContent;

  return (
    <Container>
      <div className='flex flex-col items-center'>
        <h1 className='font-[700] text-[36px] text-businessTitle mb-[30px]'>
          What our happy customers say
        </h1>
        <div className='flex flex-wrap gap-5 justify-center'>
          <CustomersReviewsCard />
          <CustomersReviewsCard />
          <CustomersReviewsCard />
          <CustomersReviewsCard />
        </div>
      </div>
    </Container>
  );
};

export default CustomersReviews;
