import { HeroTopHeader, HeroMainHeader, HeroContent } from './components';

const HeroSection = () => {
  return (
    <section
      className='bg-cover bg-center bg-no-repeat py-[12px] px-[20px]'
      style={{ backgroundImage: "url('./images/heroSection.png')" }}
    >
      <HeroTopHeader />
      <HeroMainHeader />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
