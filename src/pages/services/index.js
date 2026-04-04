import React, { useState, lazy, Suspense, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import Google from "../../assets/google_partner.svg";
import Meta from "../../assets/meta_business_partner.svg";
import Semrush from "../../assets/semrush_agency_partner.svg";
import Amazon from "../../assets/amazon_ads.svg";
import HubSpot from "../../assets/hubspot_partner.svg";
import { StaticImage } from "gatsby-plugin-image";
import Step1 from "../../assets/enhance_visibility.svg";
import Step4 from "../../assets/boost_sales.svg";

const TestimoniesDesktop = lazy(() => import("../../components/testimonies_desktop"));
const TestimoniesMobile = lazy(() => import("../../components/testimonies_mobile"));

const BOOKING_URL = "https://services.bonapartedigital.com/meetings/bonaparte";

const ServicesIndex = () => {
  const [mounted, setMounted] = useState(false);
  const [effectBtn, setEffectBtn] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-green text-olive">
        <div className="container mx-auto px-4 py-24 md:py-36 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              We're not just another{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
                <span className="relative text-white">digital marketing</span>
              </span>{" "}
              agency
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl mb-8 text-olive-light leading-relaxed">
              We're your strategic partners in world-class branding and digital domination. Forget buzzwords and fluff. We deliver hard-hitting results that last.
            </p>
            <a href={BOOKING_URL} aria-label="Book a free strategy session">
              <button
                className={`${effectBtn && "animate-push"} w-[200px] text-lg bg-olive text-green px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5`}
                onClick={() => setEffectBtn(true)}
                onAnimationEnd={() => setEffectBtn(false)}
              >
                Ready To Conquer?
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green mb-4">
            The Integrated Marketing Agency{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
              <span className="relative text-white">Brands Trust</span>
            </span>
          </h2>
          <p className="text-xl text-green mb-12">Strategy, Creative &amp; Media in One Place</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {["Data-Driven", "End-to-End Service", "Scalable for Any Stage", "Fast Execution, Real Results"].map((item) => (
              <div key={item} className="bg-green text-olive rounded-2xl p-6 flex items-center justify-center text-center font-semibold text-lg shadow-[-4px_4px_0_#EC8602]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="bg-olive py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-green text-center mb-4">Our Services</h2>
          <p className="text-xl text-green text-center mb-12">Everything you need to grow your brand online</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SEO Card */}
            <Link to="/services/seo" className="group">
              <div className="bg-green text-olive rounded-3xl p-10 h-full flex flex-col shadow-[-6px_6px_0_#EC8602] transition-transform duration-200 group-hover:-translate-y-1">
                <Step1 className="mb-4 w-12 h-12" alt="SEO" />
                <h3 className="text-3xl font-bold mb-4">SEO</h3>
                <p className="text-olive-light text-lg flex-grow">
                  Rank higher on Google and grow faster. We handle your SEO from start to finish — boosting your rankings, driving qualified traffic, and helping your business grow with proven techniques.
                </p>
                <div className="mt-8">
                  <span className="inline-block bg-olive text-green px-6 py-3 rounded-full font-semibold transition duration-300 group-hover:shadow-[-4px_4px_0_#EC8602]">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>

            {/* Ads Card */}
            <Link to="/services/digital-advertising" className="group">
              <div className="bg-green text-olive rounded-3xl p-10 h-full flex flex-col shadow-[-6px_6px_0_#EC8602] transition-transform duration-200 group-hover:-translate-y-1">
                <Step4 className="mb-4 w-12 h-12" alt="Digital Advertising" />
                <h3 className="text-3xl font-bold mb-4">Digital Advertising</h3>
                <p className="text-olive-light text-lg flex-grow">
                  Don't just spend — invest. We grow your business with expertly managed ads across Google, Meta, Amazon, LinkedIn, TikTok and more. $15M+ in managed ad spend. 400% average ROAS.
                </p>
                <div className="mt-8">
                  <span className="inline-block bg-olive text-green px-6 py-3 rounded-full font-semibold transition duration-300 group-hover:shadow-[-4px_4px_0_#EC8602]">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Lead magnet */}
          <div className="mt-8 max-w-4xl mx-auto">
            <Link to="/resources/ads-checklist" className="group">
              <div className="border-2 border-green rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/60 transition-transform duration-200 group-hover:-translate-y-1">
                <div>
                  <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-1">Free Resource</p>
                  <h3 className="text-2xl font-bold text-green">Digital Ads Checklist 2025</h3>
                  <p className="text-green mt-2">The exact step-by-step checklist we use to plan, launch, and scale winning ad campaigns.</p>
                </div>
                <span className="shrink-0 inline-block bg-green text-olive px-8 py-3 rounded-full font-semibold whitespace-nowrap transition duration-300 group-hover:shadow-[-4px_4px_0_#EC8602]">
                  Get it Free →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="bg-gradient-to-b from-olive to-white py-10 px-2">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="md:w-2/5">
            <h2 className="text-xl md:w-auto w-[300px] text-center md:text-left md:m-auto mb-12">
              Partnered with industry-leading tactical partners
            </h2>
          </div>
          <div id="vendor_logo" className="flex flex-wrap items-center md:w-4/5">
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto mb-10"><Google alt="Google Partner" className="h-10" /></div>
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto mb-10"><Meta alt="Meta Partner" className="h-10" /></div>
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto mb-8"><Semrush alt="SemRush Agency Partner" className="h-10" /></div>
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto mb-8"><Amazon alt="Amazon Ads" className="h-10" /></div>
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto">
              <a href="https://ecosystem.hubspot.com/marketplace/solutions/bonaparte" target="_blank" rel="noopener noreferrer">
                <HubSpot alt="HubSpot" className="h-12" />
              </a>
            </div>
            <div className="flex justify-center w-1/2 md:w-1/4 md:m-auto">
              <a href="https://www.designrush.com/" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../../images/design_rush_agency_partner.png" alt="Design Rush" className="w-24" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonies">
        <div className="block sm:hidden bg-white">
          <div className="container block sm:hidden">
            {mounted && <Suspense fallback={<div className="min-h-[300px]" />}><TestimoniesMobile /></Suspense>}
          </div>
        </div>
        <div className="hidden sm:block bg-white">
          <div className="container hidden sm:block bg-white">
            {mounted && <Suspense fallback={<div className="min-h-[300px]" />}><TestimoniesDesktop /></Suspense>}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-b from-white to-olive px-4 py-16 md:p-16">
        <div className="container flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="md:w-1/2 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold">Ready to{" "}
              <span className="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-orange relative inline-block">
                <span className="relative text-white">Conquer?</span>
              </span>
            </h2>
          </div>
          <div className="md:w-1/2 text-center">
            <p className="max-w-[380px] mx-auto mb-8 text-lg">Take your business to new heights with our cutting-edge marketing strategies.</p>
            <a href={BOOKING_URL} aria-label="Book a free strategy session">
              <button className="w-[220px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
                Book Free Session
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesIndex;

export const Head = () => (
  <Seo
    title="Services | Bonaparte Digital"
    description="World-class SEO, digital advertising, and marketing services. We're your strategic partners in branding and digital domination."
    robots="index, follow"
  />
);
