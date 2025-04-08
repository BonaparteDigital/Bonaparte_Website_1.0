import React from "react";
import { Link } from "gatsby";
import { Seo } from "../components/seo";
import Layout from "../components/layout";

const PrivacyPolicy = () => {
    return (
    <Layout>
        <div className="bg-olive-light">
            <div className="container">
            <div className="py-10">
            <h1>Privacy Policy</h1>
            <p>Last updated: 02/25/2024</p>
            <p>Your privacy is important to us. It is Bonaparte's policy to respect your privacy regarding any information we may collect from you across our website, [Your Website URL], and other sites we own and operate.</p>
            <h2>Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <h3>Information you provide to us</h3>
            <p>This might include your email address, name, and any other details you provide us when you subscribe to our newsletter, book a meeting, or interact with our services.</p>
            <h3>Log Data</h3>
            <p>When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>
            <h3>Cookies</h3>
            <p>We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.</p>
            <h2>Use of Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="mb-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
            </ul>
            <h2>Privacy Policies of Other Websites</h2>
            <p>The <Link to="/" className="font-bold underline underline-offset-1">bonaparte.com</Link> website contains links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.</p>
            <h2>Changes to Our Privacy Policy</h2>
            <p>We reserve the right to make changes to this privacy policy at any time. If we decide to change our privacy policy, we will post the changes on this page. We encourage you to review this page frequently to remain informed of any changes.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions about our privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.</p>
            <p>Email: <Link to="mailto:hello@bonapartedigital.com" className="font-bold underline underline-offset-1">hello@bonapartedigital.com</Link></p>
            </div>
            </div>
        </div>
    </Layout>
    );
};
      
export default PrivacyPolicy;

export const Head = () => (
    <Seo
      title="Privacy Policy | BONAPARTE"
      description="Learn how BONAPARTE collects, uses, and protects your personal data. Transparent practices to ensure your privacy is always respected"
      meta={[{ name: "robots", content: "noindex, follow" }]}
    />
  )