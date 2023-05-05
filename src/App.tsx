import HeroSection from './components/heroSection/HeroSection';
import Categories from './components/categories/Categories';
import FirstBanner from './components/FirstBanner';
import './App.css';
import PopularBusinesses from './components/popularBusinesses/PopularBusinesses';
function App() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FirstBanner />
      <PopularBusinesses/>
    </div>
  );
}

export default App;
