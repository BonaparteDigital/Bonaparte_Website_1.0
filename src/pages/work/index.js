import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";

const WorkIndex = () => (
  <Layout>
    {/* Hero */}
    <div className="bg-green text-olive">
      <div className="container mx-auto px-4 py-24 md:py-36 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Our{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
            <span className="relative text-white">Work</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-olive-light max-w-2xl mx-auto">
          Real results for real brands. Here's what happens when strategy meets execution.
        </p>
      </div>
    </div>

    {/* Coming soon placeholder */}
    <div className="bg-olive py-32 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="bg-green text-olive rounded-3xl p-16 shadow-[-6px_6px_0_#EC8602]">
          <p className="text-orange font-bold uppercase tracking-widest text-sm mb-4">Coming Soon</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies in Progress</h2>
          <p className="text-olive-light text-lg leading-relaxed mb-10">
            We're documenting the wins. In the meantime, let's talk about what we can do for your brand.
          </p>
          <a href="https://services.bonapartedigital.com/meetings/bonaparte" aria-label="Book a free strategy session">
            <button className="text-lg bg-olive text-green px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Book a Free Session
            </button>
          </a>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-gradient-to-b from-olive to-white px-4 py-16 md:p-16">
      <div className="container flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="md:w-1/2 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Ready to be our{" "}
            <span className="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-orange relative inline-block">
              <span className="relative text-white">next success story?</span>
            </span>
          </h2>
        </div>
        <div className="md:w-1/2 text-center">
          <p className="max-w-[380px] mx-auto mb-8 text-lg">We're selective about who we work with — because we're committed to results.</p>
          <a href="https://services.bonapartedigital.com/meetings/bonaparte" aria-label="Book a free strategy session">
            <button className="w-[220px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Let's Talk
            </button>
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default WorkIndex;

export const Head = () => (
  <Seo
    title="Our Work | Bonaparte Digital"
    description="Case studies and results from Bonaparte Digital. See how we help brands grow through world-class digital marketing."
    robots="index, follow"
  />
);
