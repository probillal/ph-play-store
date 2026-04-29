import AppsCard from "../UI/AppsCard";

const TrendingApps = ({ data }) => {
  return (
    <div className="my-5 space-y-3">
      <h2 className="text-5xl font-bold text-center">Trending Apps</h2>
      <p className="text-gray-400 text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
        {data.map((apps, index) => (
          <AppsCard key={index} apps={apps}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
