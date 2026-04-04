import React, { useState } from "react";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { Link } from "gatsby";

// NOTE: Replace CHECKLIST_FORM_GUID with the actual HubSpot form GUID for the ads checklist
const HS_PORTAL_ID = "23706289";
const CHECKLIST_FORM_GUID = "3968e95b-0467-46ab-a36f-882ef8f784ab"; // TODO: replace with checklist form GUID

const whatYouGet = [
  {
    title: "The 6-Step Ad Strategy",
    desc: "Follow this proven framework to set up high-converting campaigns from scratch.",
  },
  {
    title: "Avoid the Costliest Mistakes",
    desc: "Learn where most businesses waste ad spend (and how to avoid it).",
  },
  {
    title: "Winning Ad Creative Checklist",
    desc: "The exact formula to create scroll-stopping, high-converting ads.",
  },
  {
    title: "Optimization & Scaling Guide",
    desc: "How to analyze, adjust, and scale your campaigns profitably.",
  },
];

const whyReasons = [
  "It's FREE.",
  "You can get started TODAY and run ads for your business.",
  "No need to spiral down on a research adventure.",
  "No need to watch 30-minute video tutorials to get started.",
  "Works for any type of business.",
  "Did we say it's FREE?",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ChecklistForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null | "success" | "error" | "invalid"
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAIL_RE.test(email)) {
      setStatus("invalid");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${CHECKLIST_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: firstName },
              { name: "email", value: email },
            ],
            context: {
              pageUri: "bonapartedigital.com/resources/ads-checklist",
              pageName: "Digital Ads Checklist 2025",
            },
          }),
        }
      );
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-olive rounded-2xl p-10 text-center">
        <p className="text-4xl mb-4">🎉</p>
        <h3 className="text-2xl font-bold text-green mb-2">Check your inbox!</h3>
        <p className="text-green/80">Your free checklist is on its way. Welcome to the dispatch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 shadow-[-6px_6px_0_#EC8602]">
      <h3 className="text-2xl font-bold text-green mb-2">Get your FREE Digital Ads 2025 Checklist</h3>
      <p className="text-green/70 mb-6">Complete the form below to get your Ads Checklist!</p>

      <div className="mb-4">
        <label className="block text-green font-semibold mb-1" htmlFor="firstName">First Name <span className="text-orange">*</span></label>
        <input
          id="firstName"
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Your first name"
          className="w-full border-2 border-green/20 rounded-xl px-4 py-3 text-green focus:outline-none focus:border-orange transition-colors"
        />
      </div>

      <div className="mb-6">
        <label className="block text-green font-semibold mb-1" htmlFor="email">Email <span className="text-orange">*</span></label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full border-2 border-green/20 rounded-xl px-4 py-3 text-green focus:outline-none focus:border-orange transition-colors"
        />
      </div>

      {status === "invalid" && (
        <p className="text-red-500 text-sm mb-4">Please enter a valid email address.</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mb-4">Something went wrong. Please try again or email us at hello@bonapartedigital.com</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full text-lg bg-green text-olive px-8 py-4 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:translate-x-1.5 hover:-translate-y-1.5 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get my Copy"}
      </button>

      <p className="text-xs text-green/50 mt-4 leading-relaxed">
        Bonaparte will use your contact info to share product and service updates. You can unsubscribe anytime.{" "}
        <Link to="/privacy-policy" className="underline hover:text-orange">Privacy Policy</Link>.
      </p>
    </form>
  );
};

const AdsChecklistPage = () => (
  <Layout>
    {/* Breadcrumb */}
    <div className="bg-olive border-b border-green/10 px-4 py-3">
      <div className="container mx-auto text-sm text-green/60">
        <Link to="/" className="hover:text-orange transition-colors">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/resources" className="hover:text-orange transition-colors">Resources</Link>
        <span className="mx-2">›</span>
        <span className="text-green font-medium">Ads Checklist</span>
      </div>
    </div>

    {/* Hero */}
    <div className="bg-green text-olive">
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5">
          <span className="inline-block bg-orange text-white text-sm font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-widest">Free Resource</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Get your{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-[1.5deg] before:bg-orange relative inline-block">
              <span className="relative text-white">FREE</span>
            </span>{" "}
            Ads Checklist
          </h1>
          <p className="text-xl text-olive-light leading-relaxed">
            Stop wasting money on ads that don't convert. Get the exact step-by-step checklist we use to plan, launch, and scale winning ad campaigns — so you can finally run profitable digital ads with confidence.
          </p>
        </div>
        <div className="md:w-2/5 w-full">
          <ChecklistForm />
        </div>
      </div>
    </div>

    {/* What You Get */}
    <div className="bg-olive py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-12">
          What You'll Get Inside the Digital Ads Checklist?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {whatYouGet.map((item, i) => (
            <div key={i} className="bg-green text-olive rounded-2xl p-8 shadow-[-4px_4px_0_#EC8602]">
              <div className="text-orange font-black text-2xl mb-3">0{i + 1}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-olive-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Why Get It */}
    <div className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green text-center mb-12">
          Why You Should Get Our Digital Ads Checklist?
        </h2>
        <div className="space-y-4">
          {whyReasons.map((reason, i) => (
            <div key={i} className="flex items-start gap-4 bg-olive/40 rounded-2xl p-5">
              <span className="text-orange font-black text-xl shrink-0">✓</span>
              <p className="text-green text-lg font-medium">{reason}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-green text-xl font-semibold mt-10">
          📩 Enter your email above to get the FREE checklist now.
        </p>
      </div>
    </div>

    {/* Bottom repeat form */}
    <div className="bg-olive py-20 px-4">
      <div className="container mx-auto max-w-xl">
        <ChecklistForm />
      </div>
    </div>
  </Layout>
);

export default AdsChecklistPage;

export const Head = () => (
  <Seo
    title="Free Digital Ads Checklist 2025 | Bonaparte Digital"
    description="Download the exact step-by-step checklist BONAPARTE uses to plan, launch, and scale winning ad campaigns. 100% free."
    robots="index, follow"
  />
);
