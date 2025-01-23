import Layout from './components/Layout'
import Introduction from "./components/Landing/Introduction";
import Funniest from './components/Landing/JokePreview';
// import AboutUs from "./components/Landing/AboutUs";

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <Funniest />
    </Layout>
  );
}
