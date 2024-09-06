import CustomerData from "../data/CustomerData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
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
  return (
    <>
      <div className=" py-2 mt-3  md:h-[600px]">
        <div className=" w-3/4 m-auto md:mt-4 ">
          <Slider {...settings}>
            {CustomerData.map((info) => {
              return (
                <div
                  key={info.id}
                  className="h-[480px] border-2 border-slate-400 text-black rounded-xl"
                >
                  <div className="h-52 rounded-t-xl flex justify-center items-center">
                    <img
                      src={info.img}
                      alt={info.name}
                      className="h-44 w-44 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4 ">
                    <h2 className="font-bold text-xl">{info.name}</h2>
                    <p className="font-thin text-2xl break-words">
                      {info.review}
                    </p>
                    <button className="p-2 bg-orange-800 text-white rounded-lg font-normal text-xl">
                      Show More
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carousel;
