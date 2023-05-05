import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Category from './Category';
import { CustomArrowProps } from 'react-slick';

const CategoriesSlider = ({ categories }: any) => {
  const settings = {
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

  const PrevArrow = ({
    currentSlide,
    slideCount,
    ...props
  }: CustomArrowProps) => (
    <div {...props}>
      <img src='./images/icons/slider-arrow-l.png' alt='' />
    </div>
  );

  const NextArrow = ({
    currentSlide,
    slideCount,
    ...props
  }: CustomArrowProps) => (
    <div {...props}>
      <img src='./images/icons/slider-arrow-r.png' alt='' />
    </div>
  );

  return (
    <div className='lg:py-[120px] sm:py-[80px] py-[50px]'>
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
