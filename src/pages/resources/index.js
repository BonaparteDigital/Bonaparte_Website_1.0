import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";

const resources = [
  {
    type: "Free Tool",
    title: "Digital Ads Checklist 2025",
    description: "The exact step-by-step checklist we use to plan, launch, and scale winning ad campaigns. 100% free.",
    href: "/resources/ads-checklist",
    cta: "Get it Free →",
  },
];

const ResourcesIndex = () => (
  <Layout>
    {/* Hero */}
    <div className="bg-green text-olive">
      <div className="container mx-auto px-4 py-24 md:py-36 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Resources &{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
            <span className="relative text-white">Insights</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-olive-light max-w-2xl mx-auto">
          Free tools, guides, and strategic thinking to help you grow smarter.
        </p>
      </div>
    </div>

    {/* Resources grid */}
    <div className="bg-olive py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* Blog card */}
          <Link to="/blog" className="group">
            <div className="bg-green text-olive rounded-3xl p-10 h-full flex flex-col shadow-[-6px_6px_0_#EC8602] transition-transform duration-200 group-hover:-translate-y-1">
              <span className="inline-block bg-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest self-start">Blog</span>
              <h3 className="text-2xl font-bold mb-3">The Bonaparte Dispatch</h3>
              <p className="text-olive-light flex-grow leading-relaxed">
                Strategy, trends, and no-fluff marketing insights from the Bonaparte team. Updated regularly.
              </p>
              <div className="mt-8">
                <span className="inline-block bg-olive text-green px-6 py-3 rounded-full font-semibold transition duration-300 group-hover:shadow-[-4px_4px_0_#EC8602]">
                  Read Articles →
                </span>
              </div>
            </div>
          </Link>

          {/* Dynamic resource cards */}
          {resources.map((r) => (
            <Link to={r.href} key={r.title} className="group">
              <div className="bg-green text-olive rounded-3xl p-10 h-full flex flex-col shadow-[-6px_6px_0_#EC8602] transition-transform duration-200 group-hover:-translate-y-1">
                <span className="inline-block bg-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest self-start">{r.type}</span>
                <h3 className="text-2xl font-bold mb-3">{r.title}</h3>
                <p className="text-olive-light flex-grow leading-relaxed">{r.description}</p>
                <div className="mt-8">
                  <span className="inline-block bg-olive text-green px-6 py-3 rounded-full font-semibold transition duration-300 group-hover:shadow-[-4px_4px_0_#EC8602]">
                    {r.cta}
                  </span>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-gradient-to-b from-olive to-white px-4 py-16 md:p-16">
      <div className="container flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="md:w-1/2 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Want us to do the{" "}
            <span className="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-orange relative inline-block">
              <span className="relative text-white">heavy lifting?</span>
            </span>
          </h2>
        </div>
        <div className="md:w-1/2 text-center">
          <p className="max-w-[380px] mx-auto mb-8 text-lg">We don't just share knowledge — we put it to work for your brand.</p>
          <a href="https://services.bonapartedigital.com/meetings/bonaparte" aria-label="Book a free strategy session">
            <button className="w-[220px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Book Free Session
            </button>
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default ResourcesIndex;

export const Head = () => (
  <Seo
    title="Resources & Insights | Bonaparte Digital"
    description="Free tools, guides, and strategic marketing insights from Bonaparte Digital. Get the Digital Ads Checklist, read the blog, and grow smarter."
    robots="index, follow"
  />
);
