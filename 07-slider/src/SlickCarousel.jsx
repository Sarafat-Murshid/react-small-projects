import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick/lib/slider";
import { longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {longList.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img
                src={image}
                alt={name}
                className="person-img"
                loading="lazy"
              />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
