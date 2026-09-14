// Verifies and handles Stripe webhook events for the SEO Monitoring
// subscriptions. Signature verification needs the RAW request body --
// Netlify's classic function runtime gives that in event.body already
// un-parsed, so this must never run JSON.parse on it before verifying.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const signature = event.headers["stripe-signature"];
  const rawBody = event.isBase64Encoded
    ? Buffer.from(event.body, "base64")
    : event.body;

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return { statusCode: 400, body: `Webhook signature verification failed: ${err.message}` };
  }

  if (stripeEvent.type === "checkout.session.completed") {
    const session = stripeEvent.data.object;

    // TODO: fulfillment routing not yet decided (HubSpot deal / Slack /
    // email) -- see the SEO Monitoring build plan. Nothing downstream of
    // a successful subscription happens until this is wired in.
    console.log("New SEO Monitoring subscription:", {
      customerEmail: session.customer_details?.email,
      subscriptionId: session.subscription,
    });
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
