// Creates a Stripe Checkout Session for one of the three SEO Monitoring
// tiers and hands back the hosted checkout URL to redirect the browser to.
// Card entry happens on Stripe's own page -- this function never sees card
// details, keeping PCI scope minimal.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Real Price IDs are set as env vars in the Netlify dashboard once the
// Products/Prices exist in Stripe -- never hardcoded here.
const PRICE_IDS = {
  basic: process.env.STRIPE_PRICE_BASIC,
  standard: process.env.STRIPE_PRICE_STANDARD,
  premium: process.env.STRIPE_PRICE_PREMIUM,
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let tier;
  try {
    ({ tier } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: "Invalid request body" };
  }

  const priceId = PRICE_IDS[tier];
  if (!priceId) {
    return { statusCode: 400, body: `Unknown or unconfigured tier: ${tier}` };
  }

  // Netlify sets URL to the site's own deploy/production origin automatically.
  const siteUrl = process.env.URL || "https://bonapartedigital.com";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/services/seo-monitoring/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/services/seo-monitoring/`,
      allow_promotion_codes: true,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
