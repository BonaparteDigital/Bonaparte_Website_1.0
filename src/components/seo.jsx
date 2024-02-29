import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ImagePreview from "../images/Preview_Image@2x.png"

export const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }
                                                                                                                                                                        
  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={ImagePreview} />
      <meta property="og:site_name" content="Bonaparte" />
      <meta property="og:url" content="https://cix-studio.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={ImagePreview} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://bonapartedigital.com",
      "name": "Bonaparte",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@bonapartedigital.com",
      }
    }
  `}
    </script>
    </>
  )
}