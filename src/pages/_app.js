import LayoutPrimary from "../layout/LayoutPrimary";

// styles
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap-css

export default function App({ Component, pageProps }) {
  return (
    <LayoutPrimary>
      <Component {...pageProps} />;
    </LayoutPrimary>
  );
}
