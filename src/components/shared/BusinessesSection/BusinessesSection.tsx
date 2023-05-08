import axios from 'axios';
import { useEffect, useState } from 'react';
import BusinessesSlider from './BusinessesSlider';
import Container from '../Container';
import MyLoader from '../Skelton';

const BusinessesSection = ({ businessTitle }: any) => {
  const [businessesList, setBusinessesList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchBusinesses() {
    try {
      const response = await axios(
        'https://api.dev.boka.co/business-management/businesses'
      ).then((data) => setBusinessesList(data.data.data));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setBusinessesList([]);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBusinesses();
    // axios('https://api.dev.boka.co/business-management/businesses').then(
    //   (data) => setBusinessesList(data.data.data)
    // );
  }, []);

  return (
    <Container>
      <section className=' flex flex-col gap-5'>
        <h1 className='font-[700] text-[36px] text-businessTitle'>
          {businessTitle}
        </h1>
        {loading ? (
          <MyLoader />
        ) : (
          <BusinessesSlider businessesList={businessesList} loading={loading} />
        )}
      </section>
    </Container>
  );
};

export default BusinessesSection;
