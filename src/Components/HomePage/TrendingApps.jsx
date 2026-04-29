import { Link } from "react-router";
import AppsCard from "../UI/AppsCard";

const TrendingApps = ({ data }) => {
  return (
    <div className="my-5 space-y-3">
      <h2 className="text-5xl font-bold text-center">Trending Apps</h2>
      <p className="text-gray-400 text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {data.slice(0, 9).map((apps, index) => (
          <AppsCard key={index} apps={apps}></AppsCard>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/apps">
          <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-4 rounded-md">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
