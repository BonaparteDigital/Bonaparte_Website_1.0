// custom CSS styles
import "./src/styles/global.css"

// custom typefaces
import "@fontsource/raleway"
import "@fontsource/mulish"

// Slick-Carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Capture the Google Ads click ID so it can be attached to form submissions
// and used for offline conversion import later.
export const onClientEntry = () => {
  const gclid = new URLSearchParams(window.location.search).get('gclid');
  if (gclid) localStorage.setItem('bd_gclid', gclid);
};