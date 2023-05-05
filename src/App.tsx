import HeroSection from './components/heroSection/HeroSection';
import Categories from './components/categories/Categories';
import FirstBanner from './components/FirstBanner';
import PopularBusinesses from './components/popularBusinesses/PopularBusinesses';
import './App.css';
function App() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FirstBanner />
      <PopularBusinesses />
    </div>
  );
}

export default App;
