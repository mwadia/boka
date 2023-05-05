import Slider from 'react-slick';
import { CustomArrowProps } from 'react-slick';

const BusinessesCardSlider = ({ businessImages }: any) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          initialSlide: 1,
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
    <div
      {...props}
      className='absolute z-10 top-[50px] left-[10px] opacity-50 hover:opacity-100 cursor-pointer'
    >
      <img
        className='rotate-180'
        src='./images/icons/card-slider-arrow.png'
        alt='arrow'
      />
    </div>
  );

  const NextArrow = ({
    currentSlide,
    slideCount,
    ...props
  }: CustomArrowProps) => (
    <div
      {...props}
      className='absolute z-10 top-[50px] right-[10px] opacity-50 hover:opacity-100 cursor-pointer'
    >
      <img src='./images/icons/card-slider-arrow.png' alt='arrow' />
    </div>
  );

  return (
    <div>
      <Slider
        className='card-slider '
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        {...settings}
      >
        {businessImages.map((image: any) => (
          <img
            className='contain bg-no-repeat'
            key={image.id}
            src={image.imageUrl}
            alt={image.imageUrl}
          />
        ))}
      </Slider>
    </div>
  );
};

export default BusinessesCardSlider;
