import { useLoaderData } from "react-router";
import AppsCard from "../../Components/UI/AppsCard";

const Apps = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center mt-4">
          Our All Applications
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-2">
        <h2 className="font-bold">({data.length}) apps found</h2>
        <input
          className="outline-0 border-gray-300 py-1"
          type="text"
          placeholder="Search Apps"
        />
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {data.map((apps) => (
          <AppsCard apps={apps}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
