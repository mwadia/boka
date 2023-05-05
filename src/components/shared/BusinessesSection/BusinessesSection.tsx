import axios from 'axios';
import { useEffect, useState } from 'react';
import BusinessesSlider from './BusinessesSlider';
import Container from '../Container';

const BusinessesSection = ({ businessTitle }: any) => {
  const [businessesList, setBusinessesList] = useState([]);

  useEffect(() => {
    axios('https://api.dev.boka.co/business-management/businesses').then(
      (data) => setBusinessesList(data.data.data)
    );
  }, []);
  console.log(businessesList);

  return (
    <Container>
      <section>
        <h1 className='font-[700] text-[36px] text-businessTitle'>
          {businessTitle}
        </h1>
        <BusinessesSlider businessesList={businessesList} />
      </section>
    </Container>
  );
};

export default BusinessesSection;
