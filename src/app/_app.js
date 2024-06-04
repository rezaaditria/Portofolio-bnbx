import "../styles/globals.css";
import Background from "./components/Background/background";

function MyApp({ Component, pageProps }) {
  return (
    <Background>
      <Component {...pageProps} />
    </Background>
  );
}

export default MyApp;
