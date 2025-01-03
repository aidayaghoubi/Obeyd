import Layout from './components/Layout'
import Introduction from "./components/Landing/Introduction";
import AboutUs from "./components/Landing/AboutUs";
import Funniest from "./components/Landing/Funniest";

export default function Home() {
  return (
    <Layout>
        <Introduction />
      <AboutUs />
      <Funniest />
    </Layout>
  );
}
