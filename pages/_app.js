// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

// include my custom css
import '@/styles/globals.css'

// needed for Bootstrap JS functionality
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // Ask React to import Bootstrap JS file after rendering
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}
