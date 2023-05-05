import Slider from 'react-slick';
import { CustomArrowProps } from 'react-slick';
import BusinessesCard from './BusinessesCard';

const BusinessesSlider = ({ businessesList }: any) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
    <div {...props} className='absolute top-[-50px] right-10 cursor-pointer'>
      <img src='./images/icons/slider-arrow-l.png' alt='' />
    </div>
  );

  const NextArrow = ({
    currentSlide,
    slideCount,
    ...props
  }: CustomArrowProps) => (
    <div {...props} className='absolute top-[-50px] right-0 cursor-pointer'>
      <img src='./images/icons/slider-arrow-r.png' alt='' />
    </div>
  );

  return (
    <div>
      <Slider
        className='businesses-slider'
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        {...settings}
      >
        {businessesList.map((item: any) => (
          <BusinessesCard key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default BusinessesSlider;
