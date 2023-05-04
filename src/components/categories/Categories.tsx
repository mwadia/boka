import axios from 'axios';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Category from './Category';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios(
      'https://api.dev.boka.co/business-management/lookups/business-categories'
    ).then((data) => setCategories(data.data.data));
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full px-[100px]'>
      <div className='pt-[100px] h-[388px]'>
        <Slider className='px-[45px]' {...settings}>
          {categories.map((item: any) => (
            <Category key={item.id} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
