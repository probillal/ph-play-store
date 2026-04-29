import googlePlay from "../../assets/google play.png";
import appsStore from "../../assets/appas store.png";
import bannerImage from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className=" bg-gray-100 pt-5">
      <div className="mt-5 space-y-4">
        <h2 className="text-5xl font-bold text-center">
          We Build <br /> <span className="text-purple-600">Productive</span>{" "}
          Apps
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-4 justify-center ">
          <button className="btn font-semibold">
            {" "}
            <img src={googlePlay} alt="play store logo" className="w-[20px]" />
            Google Play
          </button>
          <button className="btn font-semibold">
            <img src={appsStore} alt="Apps store logo" className="w-[20px]" />{" "}
            App Store
          </button>
        </div>
        <img src={bannerImage} alt="Banner Image" className=" mx-auto" />
      </div>
    </div>
  );
};

export default Banner;
