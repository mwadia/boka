import axios from 'axios';
import { useEffect, useState } from 'react';
import {CategoriesSlider} from './components';
import './CategoriesStyles.css'
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios(
      'https://api.dev.boka.co/business-management/lookups/business-categories'
    ).then((data) => setCategories(data.data.data));
  }, []);

  return (
    <section className='px-[100px]'>
      <CategoriesSlider categories={categories} />
    </section>
  );
};

export default Categories;
