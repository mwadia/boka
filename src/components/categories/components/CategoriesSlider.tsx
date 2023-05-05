import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Category from './Category';

const CategoriesSlider = ({ categories }: any) => {
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

  const PrevArrow = (props: any) => (
    <div {...props}>
      <img src='./images/icons/slider-arrow-l.png' alt='' />
    </div>
  );

  const NextArrow = (props: any) => (
    <div {...props}>
      <img src='./images/icons/slider-arrow-r.png' alt='' />
    </div>
  );

  return (
    <div className='py-[120px]'>
      <Slider
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        className='px-[45px]'
        {...settings}
      >
        {categories.map((item: any) => (
          <Category key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesSlider;
