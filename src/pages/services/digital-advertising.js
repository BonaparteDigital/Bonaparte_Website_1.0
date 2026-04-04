import React, { useState } from "react";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { Link } from "gatsby";

const BOOKING_URL = "https://services.bonapartedigital.com/meetings/bonaparte";

const faqs = [
  {
    q: "Which advertising platform is best for my business?",
    a: "It depends on your strategy and your audience. In BONAPARTE we have an omnichannel approach meaning that we run your ads on the platform that provides the best ROI for your business. Whether it's Meta, Google Ads, Amazon Ads, LinkedIn, TikTok or Bing we cover them all.",
  },
  {
    q: "How much should I spend on online advertising?",
    a: "You can run ads for just $1 a day. We will look at your business and suggest a budget. This budget will help you get results and grow at your own pace.",
  },
  {
    q: "Can I run effective ads with a small budget?",
    a: "Absolutely. Our scalable pricing means you can start at a level that works for you and grow as your business expands.",
  },
  {
    q: "How involved do I need to be in the ad management process?",
    a: "Minimal. Once we understand your business, we handle everything so you can focus on what matters most.",
  },
  {
    q: "What's the difference between Google Ads, Meta Ads, and Amazon Ads?",
    a: "Each platform serves a unique purpose: Google Ads targets users actively searching for products or services — best for high-intent leads. Meta Ads (Facebook & Instagram) reaches audiences based on interests and behavior — ideal for brand awareness and engagement. Amazon Ads is focused on e-commerce, showing products to shoppers ready to buy. At BONAPARTE, we tailor your ad strategy across platforms to ensure the best ROI for your business.",
  },
  {
    q: "Is digital advertising more cost-effective than traditional marketing?",
    a: "Yes. Digital advertising is a cost-effective strategy for businesses of all sizes given its flexibility in terms of budget. You can start with as little as $1 a day but can scale up as much as you want.",
  },
  {
    q: "Do you offer monthly reporting and analytics?",
    a: "Yes. We provide monthly reporting analytics with actionable insights so you can stay on top of your advertising campaign.",
  },
  {
    q: "What if my business is niche?",
    a: "We customize every campaign to fit your unique audience and goals.",
  },
  {
    q: "When will I see results?",
    a: "Most clients see measurable progress within the first two weeks of launching.",
  },
];

const comparisonFeatures = [
  "Multi-Platform Expertise",
  "Custom Asset Creation",
  "Personalized Strategy",
  "Proactive Optimization",
  "Clear & Frequent Reporting",
  "Data-Driven Decisions",
  "ROI-Driven Approach",
];

const promises = [
  "Campaigns designed to achieve your goals",
  "Strategies to maximize the return on every dollar you spend",
  "Fully managed service that grows with your business",
  "No more stress or wasted hours. Just great results delivered by experts.",
];

const testimonials = [
  {
    quote: "BONAPARTE has been pivotal in expanding our customer reach and solidifying our position in the global market.",
    name: "Carmen Miroglio",
    role: "Director of Operations",
  },
  {
    quote: "We went over a year without doing any ads. When we launched our campaign with BONAPARTE our Revenue went 4x in a matter of months.",
    name: "Mariano Merlo",
    role: "CEO",
  },
  {
    quote: "Thanks to their strategic and creative approach, we enhanced our market positioning and significantly increased our brand awareness.",
    name: "Antonella Maggioni",
    role: "CEO",
  },
  {
    quote: "Our challenge was to adapt our brand to the American market and the creation of a sales funnel. We felt very confident and supported throughout the entire process.",
    name: "Alan Goldschein",
    role: "CEO @ Remote Teams",
  },
];

const platforms = ["Meta Ads", "Google Ads", "Amazon Ads", "LinkedIn Ads", "TikTok Ads", "Microsoft Bing"];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-green/20">
      <button
        className="w-full text-left py-5 flex justify-between items-center gap-4 font-semibold text-lg text-green"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="shrink-0 text-orange text-2xl font-light">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="pb-5 text-green/80 leading-relaxed">{a}</p>}
    </div>
  );
};

const AdsPage = () => {
  const [effectBtn, setEffectBtn] = useState(false);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-olive border-b border-green/10 px-4 py-3">
        <div className="container mx-auto text-sm text-green/60">
          <Link to="/" className="hover:text-orange transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/services" className="hover:text-orange transition-colors">Services</Link>
          <span className="mx-2">›</span>
          <span className="text-green font-medium">Digital Advertising</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-green text-olive">
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-4">Digital Advertising</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              We'll Grow Your Business with Ads that{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
                <span className="relative text-white">Drive Revenue</span>
              </span>
            </h1>
            <p className="text-xl text-olive-light leading-relaxed mb-8">
              Don't just spend — invest. We help you succeed with expertly managed ads.
            </p>
            <a href={BOOKING_URL} aria-label="Book your strategy session">
              <button
                className={`${effectBtn && "animate-push"} w-[240px] text-lg bg-olive text-green px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5`}
                onClick={() => setEffectBtn(true)}
                onAnimationEnd={() => setEffectBtn(false)}
              >
                Book Strategy Session
              </button>
            </a>
          </div>
          <div className="md:w-2/5 flex flex-col items-center md:items-end">
            <div className="bg-olive/10 border border-olive/30 rounded-3xl p-10 text-center shadow-[-6px_6px_0_#EC8602]">
              <p className="text-7xl font-black text-orange mb-2">85%</p>
              <p className="text-olive-light text-lg">of businesses struggle with their ad spend.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem / Intro */}
      <div className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green mb-6">We know how overwhelming ads can be.</h2>
          <p className="text-xl text-green/80 leading-relaxed">
            BONAPARTE turns your advertising into a reliable system for growth. We take the weight off your shoulders by delivering real results.
          </p>
        </div>
      </div>

      {/* Platforms */}
      <div className="bg-olive py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-green text-center mb-8">We run ads where your customers are</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((p) => (
              <span key={p} className="bg-green text-olive px-6 py-3 rounded-full font-semibold shadow-[-3px_3px_0_#EC8602]">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Our Promise */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-12">Our Promise to You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {promises.map((p, i) => (
              <div key={i} className="bg-green text-olive rounded-2xl p-8 shadow-[-4px_4px_0_#EC8602]">
                <p className="text-lg leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={BOOKING_URL} aria-label="Get Started Now">
              <button className="w-[200px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
                Get Started Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-green text-olive py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Experience You Can Rely On</h2>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { stat: "20+", label: "Years of experience" },
              { stat: "$15M+", label: "In managed ad spend" },
              { stat: "400%", label: "Average ROAS" },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <p className="text-4xl md:text-6xl font-black text-orange mb-2">{stat}</p>
                <p className="text-olive-light text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Free Session CTA */}
      <div className="bg-olive py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green mb-4">
            Claim your{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
              <span className="relative text-white">FREE Strategy Session</span>
            </span>
          </h2>
          <p className="text-green/70 text-lg mb-2">($149 Value)</p>
          <p className="text-green text-lg mb-8">Find the perfect time to meet with us and start your journey to better advertising results.</p>
          <a href={BOOKING_URL} aria-label="Book your FREE session">
            <button className="w-[220px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Book Your FREE Session
            </button>
          </a>
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-12">How We Stack Up</h2>
          <div className="rounded-3xl overflow-hidden border border-green/10 shadow-lg">
            <div className="grid grid-cols-3 bg-green text-olive text-center font-bold text-lg py-4">
              <div></div>
              <div>Other Agencies</div>
              <div className="text-orange">BONAPARTE</div>
            </div>
            {comparisonFeatures.map((feature, i) => (
              <div key={i} className={`grid grid-cols-3 text-center py-4 px-4 ${i % 2 === 0 ? "bg-olive/30" : "bg-white"}`}>
                <div className="text-left text-green font-medium pl-2">{feature}</div>
                <div className="text-red-400 font-bold text-xl">✗</div>
                <div className="text-orange font-bold text-xl">✓</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={BOOKING_URL} aria-label="Get Started Now">
              <button className="w-[200px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
                Get Started Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-olive py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green mb-4">Pricing Made Simple</h2>
          <h3 className="text-xl font-semibold text-green mb-6">Flexible Ad Plans Tailored to your Goals.</h3>
          <div className="bg-green text-olive rounded-3xl p-10 shadow-[-6px_6px_0_#EC8602] mb-8">
            <p className="text-olive-light mb-4">Fees are based on your ad spend, ensuring mutual success.</p>
            <p className="text-6xl font-black text-orange mb-2">$499</p>
            <p className="text-olive-light mb-6">Ad Management base investment / month</p>
            <p className="text-sm text-olive-light mb-8">For ad spend over $15,000, contact us for a custom plan.</p>
            <p className="text-olive leading-relaxed">In your Strategy Session we'll help you decide what your ideal budget looks like.</p>
          </div>
          <a href={BOOKING_URL} aria-label="Get Started Now">
            <button className="w-[200px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Get Started Now
            </button>
          </a>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-green/70 mb-12">Many of our clients came to us frustrated by wasted money and poor results. We've built a system that does all the work for you.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-green text-olive rounded-2xl p-8 shadow-[-4px_4px_0_#EC8602]">
                <p className="text-olive-light text-lg leading-relaxed mb-6">"{t.quote}"</p>
                <div className="border-t border-orange/30 pt-4">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-olive-light text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="bg-green text-olive py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Picture this</h2>
          <p className="text-xl text-olive-light leading-relaxed mb-10">
            Your ads running seamlessly, generating steady leads and sales while you focus on growing your business. If you want better results and more growth without the hassle, it's time to start with BONAPARTE.
          </p>
          <a href={BOOKING_URL} aria-label="Build my strategy">
            <button className="w-[240px] text-lg bg-olive text-green px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Let's Build My Strategy
            </button>
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-12">Got any questions?</h2>
          <div>
            {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-b from-white to-olive px-4 py-16 md:p-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green mb-4">Ready to start?</h2>
          <p className="text-green/70 text-lg mb-8">Book a FREE Strategy Session today ($149 Value) and let's build your winning ad strategy together.</p>
          <a href={BOOKING_URL} aria-label="Book a strategy session">
            <button className="w-[240px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Book Strategy Session
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default AdsPage;

export const Head = () => (
  <Seo
    title="Digital Advertising Services | Bonaparte Digital"
    description="Expertly managed ads across Google, Meta, Amazon, LinkedIn and TikTok. $15M+ in managed spend. 400% average ROAS. Book your free strategy session."
    robots="index, follow"
  />
);
