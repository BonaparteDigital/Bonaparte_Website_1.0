import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CixStudio from "../assets/clients/cix-studio.svg";
import Agrow from "../assets/clients/agrow.svg";
import Sentrisense from "../assets/clients/sentrisense.svg";
import CixStudioPFP from "../images/clients/cix-studio_carmen.png";
import AgrowFPF from "../images/clients/agrow_antonella.png";
import SentrisensePFP from "../images/clients/sentrisense_sebastian.png";
import QuoteIconL from "../assets/quote_icon_L.svg";
import QuoteIconR from "../assets/quote_icon_R.svg";
import NextArrowOFF from "../assets/arrow_next.svg";
import PrevArrowOFF from "../assets/arrow_prev.svg";

const testimonials = [
  {
    avatar: AgrowFPF,
    name: "Antonella Maggioni",
    role: "CEO",
    companyLogo: Agrow,
    quote: "Working with BONAPARTE was key to the creation and redefinition of our brand and logo, making our message clearer and deeply resonating with our target audience. Thanks to their strategic and creative approach, we were able to enhance our market positioning and significantly increase our brand awareness.",
  },
  {
    avatar: SentrisensePFP,
    name: "Sebastián Cerone",
    role: "Co-CEO",
    companyLogo: Sentrisense,
    quote: "BONAPARTE has been instrumental in refining Sentrisense's brand language and content, elevating our message to resonate clearly with our audience. Their strategic approach in expanding our reach has not only built strong brand awareness but also significantly contributed to our success last year. Truly transformative!",
  },
  {
    avatar: CixStudioPFP,
    name: "Carmen Miroglio Vázquez",
    role: "Director of Operations",
    companyLogo: CixStudio,
    quote: "Starting with a powerful new brand identity created by BONAPARTE, including our logo and website, they laid a solid foundation for Cix Studio's growth in our industry. Their continuous consulting services have been pivotal in expanding our customer reach and solidifying our position in the global market.",
  },
  
  // Add more testimonials below
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
      <NextArrowOFF alt="Next"/>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
      <PrevArrowOFF alt="Previous"/>
    </div>
  );
}

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div id="testimonies.desktop" className="xl:py-20 py-14 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-green">Empowering Our Allies</h2>
      <div className='container flex flex-wrap justify-center items-start gap-4 text-olive-light mx-auto' style={{ position: 'relative' }}>
      <Slider className='container mx-auto px-10 sm:px-8 lg:px-14' {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="relative mx-32 bg-green rounded-2xl shadow-lg text-center px-32 py-10">
              <QuoteIconL className="absolute top-14 left-16 transform -translate-x-2 -translate-y-2 w-12 h-12 fill-current text-orange" alt="QuoteIconLeft" />
              <blockquote className="md:text-xl text-sm mt-4 mb-6">{testimonial.quote}</blockquote>
              <QuoteIconR className="absolute top-14 right-16 transform translate-x-2 -translate-y-2 w-12 h-12 fill-current text-orange" alt="QuoteIconRight" />
              <div className="border-t-4 border-orange w-20 mx-auto my-7"></div> {/* Horizontal line */}
              <div id="client_info" className="flex items-center justify-center">
                <div id="company">
                  <testimonial.companyLogo className="w-40 mx-auto" alt={`${testimonial.name} company logo`} />
                </div> 
                <div id="client" className='flex ml-6 items-center'>
                  <img src={testimonial.avatar} className="w-12 h-12 rounded-full" alt={`${testimonial.name} avatar`} ></img>
                  <div className='text-left ml-2'>
                    <p className='mb-0'>{testimonial.name}</p>
                    <p className='mb-0'>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;