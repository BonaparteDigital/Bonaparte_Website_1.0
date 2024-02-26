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

const testimonial = [
  {
    avatar: SentrisensePFP,
    name: "Sebastián Cerone",
    role: "Co-CEO",
    companyLogo: Sentrisense,
    quote: "Bonaparte has been instrumental in refining Sentrisense's brand language and content, elevating our message to resonate clearly with our audience. Their strategic approach in expanding our reach has not only built strong brand awareness but also significantly contributed to our success last year. Truly transformative!",
  },
  {
    avatar: CixStudioPFP,
    name: "Carmen Miroglio Vázquez",
    role: "Director of Operations",
    companyLogo: CixStudio,
    quote: "Starting with a powerful new brand identity created by Bonaparte, including our logo and website, they laid a solid foundation for Cix Studio's growth in our industry. Their continuous consulting services have been pivotal in expanding our customer reach and solidifying our position in the global market.",
  },
  // Add more testimonials below
];

function MobileSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  
  return (
    <div id="testimonies.mobile" className="bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green">Real Feedback, Real Results</h2>
      <Slider className='container mx-auto' {...settings}>
      {testimonial.map((testimonial, index) => (
      <div key={index} className="px-2">
      <div className="bg-green rounded-2xl shadow-lg text-center py-10 px-4 text-olive-light mb-4">
      <testimonial.companyLogo className="w-40 mx-auto" alt={`${testimonial.name} company logo`} />
      <QuoteIconL className="w-8 h-8 md:w-12 md:h-12 text-orange mx-auto my-4" alt="QuoteIconLeft" />
      <blockquote className="text-lg mt-4 mb-6">{testimonial.quote}</blockquote>
      <div className="border-t-4 border-orange w-20 mx-auto my-7"></div> {/* Horizontal line */}
      <div id="client" className='flex ml-6 items-center'>
        <img src={testimonial.avatar} className="w-12 h-12 rounded-full" alt={`${testimonial.name} avatar`} ></img>
          <div className='text-left ml-2'>
          <p className='mb-0'>{testimonial.name}</p>
          <p className='mb-0'>{testimonial.role}</p>
          </div>
        </div>
        </div>
        </div>
        ))}
      </Slider>
    </div>
  );
}

export default MobileSlider;