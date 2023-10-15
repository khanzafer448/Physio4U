import About from "../components/about";
import HeroBanner from "../components/banner/heroBanner";
import Feature from "../components/feature";
import IntroVideo from "../components/introVideo";
import Layout from "../components/layout/layout";
import MoveText from "../components/moveText";
import OurService from "../components/ourService";
import OurTeam from "../components/ourTeam";
import WhyUS from "../components/whyUs";

const Home = () => {
  return (
    <Layout>
      <HeroBanner />
      <Feature />
      <About />
      <WhyUS />
      <MoveText />
      <OurService />
      <IntroVideo />
      <OurTeam /> 
    </Layout>
  );
};

export default Home;
