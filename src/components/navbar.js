import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/logo_bonaparte_black.svg';
import IconClose from "../assets/icon_menu_close.svg";
import OpenIcon from "../assets/icon_menu_open.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal Open-Close call
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the page has been scrolled

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      setIsScrolled(yOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${isScrolled ? 'md:py-2' : 'md:py-4'} bg-olive transition-all duration-300 sticky py-4 top-0 z-50`}>
      <div className="container mx-auto px-4">
          <div id="header.desktop" className='flex items-center justify-between'>
            <div id="navbar.left" className="z-50">
              <Logo className={`w-[160px] ${isOpen ? 'filter brightness-0 invert' : ''}`} alt="Bonaparte"/>
            </div>
            <div id="hamburguer.menu" className='md:hidden z-50'>
              <button id="menu" type="button" aria-label="Menu" className='block' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IconClose />
                ) : (
                  <OpenIcon />
                )}
              </button>
            </div>
            <div id="navbar.center" className="hidden md:flex text-center">
              <nav className="md:text-lg hidden md:flex">
                <a className="hover:underline underline-offset-8 decoration-orange mr-5" href="#strategies">Strategies</a>
                <a className="hover:underline underline-offset-8 decoration-orange mr-5" href="#testimonies">Testimonies</a>
               {/*<a className="hover:underline underline-offset-8 mr-5" href="#insights">Insights</a>*/}
              </nav>
            </div>
            <div id="navbar.right" className="hidden md:flex md:pl-20">
            <a href='https://calendly.com/hellobonaparte/meet-greet' className="md:inline-block text-md font-bold bg-green text-olive px-6 py-3 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5">Book RDV</a>
            </div>
          </div>
      </div>
      <div id="hamburguer.modal"
        className={`bg-green text-olive text-5xl text-center font-mulish font-black h-full fixed top-0 w-full py-10 pt-2 pb-4 z-40 transition-transform duration-400 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div>
          <a className="mt-20 px-4 py-4 block decoration-primary decoration-2" href="#strategies" onClick={handleCloseModal} >strategies</a>
          <a className="px-4 py-4 block decoration-primary decoration-2" href="#testimonies" onClick={handleCloseModal} >testimonies</a>
          {/*<a className="px-4 py-4 block decoration-primary decoration-2" href="#insights" onClick={handleCloseModal} >insights</a>*/}
        </div>
        <div>
           <Link to="https://calendly.com/hellobonaparte/meet-greet" className="w-[200px] text-lg font-bold bg-olive text-green px-8 py-4 rounded-full">Book RDV</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;