import React, { useState } from "react";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { Link } from "gatsby";

const HS_PORTAL_ID = "47027573";
const AUDIT_FORM_GUID = "f8770731-aa35-4749-88e9-7732a3b76695";

// Anchor price shown on the page. Sourced from 2026 agency pricing surveys:
// small-business audits run $500–$2,500, professional agency tier $1,500–$5,000.
// $1,500 sits inside every band, so the claim survives scrutiny.
const AUDIT_VALUE = 1500;

// Value of the LEAD to us, not the retail price of the audit. Sits between
// Checklist Download ($50) and Meeting Booked ($1,800) — see CONVERSION-TRACKING.md.
const LEAD_VALUE = 500;

const whatYouGet = [
  {
    title: "Technical Health Check",
    desc: "Crawlability, indexation, site speed, Core Web Vitals and mobile usability — every error that quietly caps your rankings.",
  },
  {
    title: "On-Page Analysis",
    desc: "Titles, meta descriptions, heading structure, internal linking and keyword cannibalisation across your key pages.",
  },
  {
    title: "Keyword & Ranking Gaps",
    desc: "Where you rank today, where your competitors outrank you, and the searches you should own but don't.",
  },
  {
    title: "Backlink Profile Review",
    desc: "Your authority versus your competitors', plus any toxic or spammy links dragging your domain down.",
  },
  {
    title: "Content Opportunities",
    desc: "The pages worth updating, the pages worth killing, and the topics your audience is searching that you've never covered.",
  },
  {
    title: "A Prioritised Action Plan",
    desc: "Not a 60-page PDF export. A ranked list of fixes by impact and effort, so you know exactly what to do on Monday morning.",
  },
];

const pricingTiers = [
  {
    label: "Freelancer / entry-level",
    price: "$500 – $1,000",
    note: "Mostly an automated tool export with light commentary.",
  },
  {
    label: "Agency (small business site)",
    price: "$1,500 – $5,000",
    note: "Manual review, competitor analysis and prioritised recommendations.",
  },
  {
    label: "Enterprise / large sites",
    price: "$7,500 – $40,000+",
    note: "Tens of thousands of URLs, multi-market, deep technical work.",
  },
];

const howItWorks = [
  {
    title: "Send us your site",
    desc: "Fill in the form. We need your domain and an email — that's genuinely it.",
  },
  {
    title: "We audit it properly",
    desc: "A real strategist reviews your site — not just a tool export. Takes us about 3 business days.",
  },
  {
    title: "We walk you through it",
    desc: "You get the audit plus a call to explain what it means and what to fix first. No obligation to hire us.",
  },
];

const faqs = [
  {
    q: "Is this really free? What's the catch?",
    a: "It's genuinely free and there's no obligation. The honest reason we do it: an audit is the best sales pitch we have. Most businesses who see exactly what's broken on their site — and what it's costing them — decide they'd rather we fixed it than do it themselves. Some don't, and that's fine. You keep the audit either way.",
  },
  {
    q: "How is this different from a free tool report?",
    a: "Automated tools give you a score and a list of 400 'errors', most of which don't matter. A real strategist reviews your site, works out which issues are actually costing you traffic and revenue, and ranks them. The prioritisation is the whole value.",
  },
  {
    q: "How long does the audit take?",
    a: "About 3 business days from submission. If your site is unusually large or complex we'll tell you upfront.",
  },
  {
    q: "What kind of businesses is this for?",
    a: "Any business with a website that should be getting more organic traffic than it does. We work across B2B, e-commerce and services. If your site is brand new with no content at all, an audit won't help much yet — book a strategy call instead.",
  },
  {
    q: "Do I have to become a client afterwards?",
    a: "No. The audit is yours to keep and act on however you like, including handing it to another agency or your in-house team.",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AuditForm = ({ id }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState(null); // null | "success" | "error" | "invalid" | "missing"
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName.trim() || !website.trim()) {
      setStatus("missing");
      return;
    }

    if (!EMAIL_RE.test(email)) {
      setStatus("invalid");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${AUDIT_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: firstName.trim() },
              { name: "email", value: email },
              { name: "website", value: website.trim() },
            ],
            context: {
              pageUri: "bonapartedigital.com/resources/seo-audit",
              pageName: "Free SEO Audit",
            },
          }),
        }
      );
      if (response.ok) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "seo_audit_request",
          value: LEAD_VALUE,
          currency: "USD",
          user_data: { email: email },
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-olive rounded-2xl p-10 text-center">
        <p className="text-4xl mb-4">🔍</p>
        <h3 className="text-2xl font-bold text-green mb-2">We're on it.</h3>
        <p className="text-green/80">
          Your audit is being prepared — expect it in your inbox within 3 business days,
          along with a link to book your walkthrough call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-10 shadow-[-6px_6px_0_#EC8602]"
    >
      <h3 className="text-2xl font-bold text-green mb-2">Claim your FREE SEO Audit</h3>
      <p className="text-green/70 mb-6">
        Normally a <span className="font-bold text-orange">${AUDIT_VALUE.toLocaleString()}</span> engagement. Yours at no cost.
      </p>

      <div className="mb-4">
        <label className="block text-green font-semibold mb-1" htmlFor={`${id}-firstName`}>
          First Name <span className="text-orange">*</span>
        </label>
        <input
          id={`${id}-firstName`}
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Your first name"
          className="w-full border-2 border-green/20 rounded-xl px-4 py-3 text-green focus:outline-none focus:border-orange transition-colors"
        />
      </div>

      <div className="mb-4">
        <label className="block text-green font-semibold mb-1" htmlFor={`${id}-email`}>
          Work Email <span className="text-orange">*</span>
        </label>
        <input
          id={`${id}-email`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@company.com"
          className="w-full border-2 border-green/20 rounded-xl px-4 py-3 text-green focus:outline-none focus:border-orange transition-colors"
        />
      </div>

      <div className="mb-6">
        <label className="block text-green font-semibold mb-1" htmlFor={`${id}-website`}>
          Website to audit <span className="text-orange">*</span>
        </label>
        <input
          id={`${id}-website`}
          type="text"
          required
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="yourcompany.com"
          className="w-full border-2 border-green/20 rounded-xl px-4 py-3 text-green focus:outline-none focus:border-orange transition-colors"
        />
      </div>

      {status === "missing" && (
        <p className="text-red-500 text-sm mb-4">Please fill in all fields.</p>
      )}
      {status === "invalid" && (
        <p className="text-red-500 text-sm mb-4">Please enter a valid email address.</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mb-4">
          Something went wrong. Please try again or email us at hello@bonapartedigital.com
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get my Free Audit"}
      </button>

      <p className="text-xs text-green/50 mt-4 leading-relaxed">
        Bonaparte will use your contact info to share product and service updates. You can
        unsubscribe anytime.{" "}
        <Link to="/privacy-policy" className="underline hover:text-orange">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
};

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-green/15">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex justify-between items-center gap-4 text-left py-5"
      >
        <span className="text-lg font-semibold text-green">{q}</span>
        <span className="text-orange text-2xl font-black shrink-0 leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <p className="text-green/75 leading-relaxed pb-5">{a}</p>}
    </div>
  );
};

const SeoAuditPage = () => (
  <Layout>
    {/* Breadcrumb */}
    <div className="bg-olive border-b border-green/10 px-4 py-3">
      <div className="container mx-auto text-sm text-green/60">
        <Link to="/" className="hover:text-orange transition-colors">
          Home
        </Link>
        <span className="mx-2">›</span>
        <Link to="/resources" className="hover:text-orange transition-colors">
          Resources
        </Link>
        <span className="mx-2">›</span>
        <span className="text-green font-medium">Free SEO Audit</span>
      </div>
    </div>

    {/* Hero */}
    <div className="bg-green text-olive">
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5">
          <span className="inline-block bg-orange text-white text-sm font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
            ${AUDIT_VALUE.toLocaleString()} Value — Free
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Get your{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
              <span className="relative text-white">FREE</span>
            </span>{" "}
            SEO Audit
          </h1>
          <p className="text-xl text-olive-light leading-relaxed">
            Find out exactly why your site isn't ranking — and what to fix first. A real
            strategist reviews your website and sends you a prioritised action plan. Agencies
            charge ${AUDIT_VALUE.toLocaleString()}+ for this. We do it free.
          </p>
        </div>
        <div className="md:w-2/5 w-full">
          <AuditForm id="hero" />
        </div>
      </div>
    </div>

    {/* What You Get */}
    <div className="bg-olive py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-4">
          What's Inside Your SEO Audit?
        </h2>
        <p className="text-green/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Six areas, reviewed by a human, ranked by what will actually move your traffic.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatYouGet.map((item, i) => (
            <div
              key={item.title}
              className="bg-green text-olive rounded-2xl p-8 shadow-[-4px_4px_0_#EC8602]"
            >
              <div className="text-orange font-black text-2xl mb-3">0{i + 1}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-olive-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Price anchor */}
    <div className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-4">
          What Does an SEO Audit Normally Cost?
        </h2>
        <p className="text-green/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Here's the going rate across the industry in 2026. Then here's ours.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.label}
              className="border-2 border-green/15 rounded-2xl p-8 text-center"
            >
              <p className="text-green/60 text-sm font-semibold uppercase tracking-wider mb-3">
                {tier.label}
              </p>
              <p className="text-3xl font-black text-green mb-3">{tier.price}</p>
              <p className="text-green/70 leading-relaxed">{tier.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-green text-olive rounded-3xl p-10 text-center shadow-[-6px_6px_0_#EC8602]">
          <p className="text-olive-light text-sm font-semibold uppercase tracking-wider mb-3">
            Bonaparte Digital
          </p>
          <p className="text-6xl md:text-7xl font-black text-white mb-4">$0</p>
          <p className="text-olive-light text-lg max-w-xl mx-auto leading-relaxed">
            Same depth as the agency tier. Reviewed by a strategist, prioritised by impact,
            walked through on a call. We just don't charge for it.
          </p>
        </div>
      </div>
    </div>

    {/* How it works */}
    <div className="bg-olive py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {howItWorks.map((step, i) => (
            <div key={step.title} className="bg-white rounded-2xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange text-white font-black text-xl flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-green mb-2">{step.title}</h3>
              <p className="text-green/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Why free */}
    <div className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green mb-6">
          Why Would We Give This Away?
        </h2>
        <p className="text-green/75 text-lg leading-relaxed mb-6">
          Because it's the most honest sales pitch we have. Once you see exactly what's broken
          on your site — and roughly what that's costing you in missed traffic — you'll either
          want to fix it yourself or want someone to fix it for you.
        </p>
        <p className="text-green/75 text-lg leading-relaxed mb-10">
          If it's the second one, you already know who to call. If it's the first, keep the
          audit and go get after it. No hard feelings, no follow-up sequence designed to wear
          you down.
        </p>
        <p className="text-green text-xl font-semibold">
          🔍 Enter your website above to claim your free audit.
        </p>
      </div>
    </div>

    {/* FAQ */}
    <div className="bg-olive py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="bg-white rounded-3xl px-8 py-2">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
        <p className="text-center text-green/70 mt-10">
          Looking for ongoing help instead?{" "}
          <Link to="/services/seo" className="text-green font-semibold underline hover:text-orange transition-colors">
            See our SEO services →
          </Link>
        </p>
      </div>
    </div>

    {/* Bottom repeat form */}
    <div className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-xl">
        <AuditForm id="footer" />
      </div>
    </div>
  </Layout>
);

export default SeoAuditPage;

export const Head = () => (
  <Seo
    title="Free SEO Audit ($1,500 Value) | Bonaparte Digital"
    description="Get a free SEO audit of your website — technical health, on-page, keyword gaps, backlinks and a prioritised action plan. Agencies charge $1,500+. We do it free."
    pathname="/resources/seo-audit"
    robots="index, follow"
  >
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      })}
    </script>
  </Seo>
);
