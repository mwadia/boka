import axios from 'axios';
import { useEffect, useState } from 'react';

const PopularBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios('https://api.dev.boka.co/business-management/businesses').then(
      (data) => setBusinesses(data.data.data)
    );
  }, []);
  console.log(businesses);

  return (
    <section className='px-6 lg:px-[155px]'>
      <h1 className='font-[700] text-[36px] text-businessTitle'>
        Popular Businesses
      </h1>
    </section>
  );
};

export default PopularBusinesses;
