import React from 'react';
import Container from './shared/Container';

const Footer = () => {
  return (
    <Container bgColor='[#F9F9F9]'>
      <div className='flex flex-col lg:flex-row justify-between py-[80px]'>
        <div className='text-[#6B7C80] font-[400] lg:w-2/5 flex flex-col gap-3'>
          <img className='w-[130px]' src='./images/logo.png' alt='logo' />
          <p>
            Boka is the new favorite online destination for beauty & wellness
            bookings, for both professionals and clients. On Boka, providers get
            a chance to connect with new clients, showcase their work, and
            streamline their business. Clients can discover their new favorite
            providers, get inspired, find last-minute bookings, and simply
            schedule all their beauty & wellness appointments for the upcoming
            month.
          </p>
        </div>
        <div className='text-[#6B7C80] font-[400] lg:w-3/5 flex justify-around flex-wrap gap-8'>
          <div className=''>
            <h1 className='text-businessTitle font-semibold mb-3'>RESOURSES</h1>
            <div className='flex flex-col justify-between'>
              <h1 className='mb-3'>Boka</h1>
              <h1 className='mb-3'>Contact</h1>
              <h1>FAQ</h1>
            </div>
          </div>
          <div className=''>
            <h1 className='text-businessTitle font-semibold mb-3'>FOLLOW US</h1>
            <div className='flex flex-col justify-between'>
              <h1 className='mb-3'>Press</h1>
              <h1 className='mb-3'>Social</h1>
              <h1>Newsletter</h1>
            </div>
          </div>
          <div className=''>
            <h1 className='text-businessTitle font-semibold mb-3'>LEGAL</h1>
            <div className='flex flex-col justify-between'>
              <h1 className='mb-3'>Privacy Policy</h1>
              <h1 className='mb-3'>Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
