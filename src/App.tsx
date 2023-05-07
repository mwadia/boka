import HeroSection from './components/heroSection/HeroSection';
import Categories from './components/categories/Categories';
import FirstBanner from './components/FirstBanner';
import './App.css';
import PopularBusinesses from './components/PopularBusinesses';
import FeaturedBusinesses from './components/FeaturedBusinesses';
import HairSalons from './components/HairSalons';
import Image from './components/shared/Image';
import PopularCategories from './components/PopularCategories';
function App() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FirstBanner />
      <PopularBusinesses />
      <FeaturedBusinesses />
      <HairSalons />
      <PopularCategories />
    </div>
  );
}

export default App;
