import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ImagePreview from "../images/Preview_Image@2x.png"

export const Seo = ({ title, description, pathname, meta = [], children }) => {
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
      <meta property="og:url" content="https://bonapartedigital.com/" />
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
      <meta name="robots" content="index, follow" />
      {meta.map(({ name, content }, index) => (
  <meta key={index} name={name} content={content} />
))}
      <script type="application/ld+json">
    {`
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://bonapartedigital.com",
    "name": "BONAPARTE",
    "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@bonapartedigital.com"
    }
}
  `}
    </script>
    </>
  )
}