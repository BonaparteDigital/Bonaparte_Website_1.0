import React, { useState } from "react";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { Link } from "gatsby";

const BOOKING_URL = "https://services.bonapartedigital.com/meetings/bonaparte";

const faqs = [
  {
    q: "How long does it take to see SEO results?",
    a: "SEO is a long-term strategy, but most clients start seeing improvements in rankings and organic traffic within 3–6 months.",
  },
  {
    q: "Do I need to create content for SEO to work?",
    a: "High-quality content is a key part of SEO. We can create optimized content for you or work with your existing materials to improve visibility.",
  },
  {
    q: "What makes BONAPARTE different from other SEO agencies?",
    a: "Unlike other agencies, we provide transparent reporting, customized strategies, and continuous optimization to ensure long-term success, not just temporary rankings.",
  },
  {
    q: "Is SEO a one-time investment or an ongoing process?",
    a: "SEO is an ongoing process. Search engines constantly update their algorithms, and competitors keep optimizing. We continuously refine your strategy to maintain and improve your rankings.",
  },
];

const comparisonFeatures = [
  "Customized SEO Strategies",
  "Proactive Optimization",
  "Clear & Frequent Reporting",
  "Data-Driven Decisions",
  "Proven Track Record",
];

const promises = [
  "SEO strategies designed to rank your business on Google",
  "Proven tactics to drive organic traffic that converts",
  "A fully managed service that grows with your business",
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
    quote: "We went from having no inbounds at all to start getting calls and e-mails asking for our services. BONAPARTE significantly contributed to our success last year.",
    name: "Sebastian Cerone",
    role: "CEO",
  },
];

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

const SeoPage = () => {
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
          <span className="text-green font-medium">SEO</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-green text-olive">
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-4">Search Engine Optimization</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Rank Higher on Google &{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
                <span className="relative text-white">Grow Faster.</span>
              </span>
            </h1>
            <p className="text-xl text-olive-light leading-relaxed mb-8">
              Want to grow your business without lifting a finger? BONAPARTE takes care of your SEO from start to finish, so you don't have to.
            </p>
            <a href={BOOKING_URL} aria-label="Get Started with SEO">
              <button
                className={`${effectBtn && "animate-push"} w-[200px] text-lg bg-olive text-green px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5`}
                onClick={() => setEffectBtn(true)}
                onAnimationEnd={() => setEffectBtn(false)}
              >
                Get Started Now
              </button>
            </a>
          </div>
          <div className="md:w-2/5 flex flex-col items-center md:items-end">
            <div className="bg-olive/10 border border-olive/30 rounded-3xl p-10 text-center shadow-[-6px_6px_0_#EC8602]">
              <p className="text-7xl font-black text-orange mb-2">75%</p>
              <p className="text-olive-light text-lg">of users never scroll past the first page on Google.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Claim spot */}
      <div className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green mb-6">We help you claim your spot at the top.</h2>
          <p className="text-xl text-green/80 leading-relaxed">
            BONAPARTE specializes in boosting your rankings, driving qualified traffic, and helping your business grow online with proven SEO techniques.
          </p>
        </div>
      </div>

      {/* Our Promise */}
      <div className="bg-olive py-20 px-4">
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
            <a href={BOOKING_URL} aria-label="Get Results">
              <button className="w-[200px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
                Get Results
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
              { stat: "1000+", label: "Successful SEO campaigns" },
              { stat: "100%", label: "Dedicated team" },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <p className="text-5xl md:text-6xl font-black text-orange mb-2">{stat}</p>
                <p className="text-olive-light text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Free Audit CTA */}
      <div className="bg-olive py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green mb-4">
            Claim your{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
              <span className="relative text-white">FREE SEO Audit</span>
            </span>{" "}
            Session
          </h2>
          <p className="text-green/70 text-lg mb-2">($229 Value)</p>
          <p className="text-green text-lg mb-8">Book your FREE SEO Session Today. Find the perfect time to meet with us and start your journey to better results.</p>
          <a href={BOOKING_URL} aria-label="Book your SEO session">
            <button className="w-[220px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Book Your Session
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
            <a href={BOOKING_URL} aria-label="Start growing today">
              <button className="w-[220px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
                Start Growing Today
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-olive py-20 px-4">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Imagine What's Next</h2>
          <p className="text-xl text-olive-light leading-relaxed mb-10">
            Picture this: Your website ranking at the top, driving consistent organic traffic and converting leads into loyal customers.
          </p>
          <a href={BOOKING_URL} aria-label="Get Started Now">
            <button className="w-[200px] text-lg bg-olive text-green px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Get Started Now
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
          <h2 className="text-3xl md:text-4xl font-bold text-green mb-4">Schedule Your SEO Session</h2>
          <p className="text-green/70 text-lg mb-8">Book your FREE SEO Session Today ($229 Value). Find the perfect time to meet with us and start your journey to better results.</p>
          <a href={BOOKING_URL} aria-label="Schedule your SEO session">
            <button className="w-[220px] text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5">
              Book Free Session
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default SeoPage;

export const Head = () => (
  <Seo
    title="SEO Services | Bonaparte Digital"
    description="Rank higher on Google and grow faster. BONAPARTE's fully managed SEO service drives qualified traffic and lasting results."
    robots="index, follow"
  />
);
