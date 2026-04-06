import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/logo_bonaparte_black.svg';
import IconClose from "../assets/icon_menu_close.svg";
import OpenIcon from "../assets/icon_menu_open.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal Open-Close call
  const [isScrolled, setIsScrolled] = useState(false); // Track scrolling
  const [effectButtonOne, setEffectButtonOne] = useState(false); // Button animation state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
            <Link to="/" aria-label="Bonaparte Home"><Logo className={`w-[160px] ${isOpen ? 'filter brightness-0 invert' : ''}`} alt="Bonaparte"/></Link>
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
              <nav className="md:text-lg hidden md:flex items-center">
                <div className="relative group mr-5 inline-flex items-center gap-1 services-trigger">
                  <Link className="nav-link decoration-orange whitespace-nowrap" to="/services/">Services</Link>
                  <svg className="w-3 h-3 flex-shrink-0 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                  </svg>
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block min-w-[190px] z-50">
                    <div className="bg-olive border border-green/10 shadow-[-4px_4px_0_#EC8602] rounded-xl py-2">
                      <Link to="/services/" className="block px-4 py-2 text-sm font-semibold hover:text-orange transition-colors">All Services</Link>
                      <Link to="/services/digital-advertising" className="block px-4 py-2 text-sm hover:text-orange transition-colors">Digital Advertising</Link>
                      <Link to="/services/seo" className="block px-4 py-2 text-sm hover:text-orange transition-colors">SEO</Link>
                    </div>
                  </div>
                </div>
                <Link className="nav-link decoration-orange mr-5" to="/work">Work</Link>
                <div className="relative group mr-5 inline-flex items-center gap-1 services-trigger">
                  <Link className="nav-link decoration-orange whitespace-nowrap" to="/resources/">Resources</Link>
                  <svg className="w-3 h-3 flex-shrink-0 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                  </svg>
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block min-w-[190px] z-50">
                    <div className="bg-olive border border-green/10 shadow-[-4px_4px_0_#EC8602] rounded-xl py-2">
                      <Link to="/blog" className="block px-4 py-2 text-sm font-semibold hover:text-orange transition-colors">Blog</Link>
                      <Link to="/resources/ads-checklist" className="block px-4 py-2 text-sm hover:text-orange transition-colors">Ads Checklist</Link>
                    </div>
                  </div>
                </div>
              </nav>
         </div>
         <div id="navbar.right" className="hidden md:flex">
         <a class="cta_book_rdv" href='https://services.bonapartedigital.com/meetings/bonaparte' aria-label="Book RDV"><button className={`${effectButtonOne && "animate-push"} md:inline-block w-[120px] h-[40px] text-md bg-green text-olive rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5`}
            onClick={() => {setEffectButtonOne(true);}} onAnimationEnd={() => setEffectButtonOne(false)}>Book RDV</button></a>
         </div>
       </div>
      </div>
      <div id="hamburguer.modal"
        className={`bg-green text-olive text-5xl text-center font-mulish font-black h-full fixed top-0 w-full py-10 pt-2 pb-4 z-40 transition-transform duration-400 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div id="sections" className='pt-10 mb-20'>
          <Link className="mt-20 px-4 py-4 block decoration-primary decoration-2" to="/services/" onClick={handleCloseModal}>services</Link>
          <Link className="px-4 py-4 block decoration-primary decoration-2" to="/work" onClick={handleCloseModal}>work</Link>
          <Link className="px-4 py-4 block decoration-primary decoration-2" to="/resources/" onClick={handleCloseModal}>resources</Link>
          <a className="px-4 py-4 block decoration-primary decoration-2" href="/#strategies" onClick={handleCloseModal}>strategies</a>
          <a className="px-4 py-4 block decoration-primary decoration-2" href="/#testimonies" onClick={handleCloseModal}>testimonials</a>
        </div>
        <div>
           <Link to="https://calendly.com/hellobonaparte/meet-greet" className="w-[200px] text-lg font-bold bg-olive text-green px-8 py-4 rounded-full">Book RDV</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;