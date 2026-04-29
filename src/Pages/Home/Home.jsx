import { useLoaderData } from "react-router";
import Banner from "../../Components/HomePage/Banner";
import Stats from "../../Components/HomePage/Stats";
import TrendingApps from "../../Components/HomePage/TrendingApps";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApps data={data}></TrendingApps>
    </div>
  );
};

export default Home;
