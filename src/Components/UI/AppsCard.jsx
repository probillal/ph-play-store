import { CiStar } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";

const AppsCard = ({ apps }) => {
  return (
    <div className="card bg-base-100 shadow-sm my-4">
      <figure>
        <img src={apps.image} alt={apps.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{apps.title}</h2>
        <div className="card-actions  justify-between">
          <span className="bg-green-100 text-green-500 py-1 px-3 flex items-center gap-1">
            <FaDownload />
            {apps.downloads}
          </span>
          <span className="bg-yellow-100 text-yellow-500 py-1 px-3 flex items-center gap-1">
            <CiStar />
            {apps.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
