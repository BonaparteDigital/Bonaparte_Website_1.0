const React = require('react')

/**
 * Inject GTM Consent Mode v2 defaults before the GTM script loads.
 * This ensures no tracking fires until the user explicitly consents.
 */
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('script', {
      key: 'gtm-consent-default',
      dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'denied'
          });
        `
      }
    })
  ])
}
