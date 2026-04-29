const Stats = () => {
  return (
    <div class=" mx-auto  bg-gradient-to-r from-violet-700 via-purple-600 to-purple-500 px-6 py-16 text-white">
      <div class="text-center">
        <h2 class="text-3xl md:text-5xl font-bold">
          Trusted By Millions, Built For You
        </h2>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <p class="text-sm text-gray-200">Total Downloads</p>

          <h3 class="text-5xl md:text-6xl font-bold mt-4">29.6M</h3>

          <p class="text-sm text-gray-200 mt-4">21% More Than Last Month</p>
        </div>

        <div>
          <p class="text-sm text-gray-200">Total Reviews</p>

          <h3 class="text-5xl md:text-6xl font-bold mt-4">906K</h3>

          <p class="text-sm text-gray-200 mt-4">46% More Than Last Month</p>
        </div>

        <div>
          <p class="text-sm text-gray-200">Active Apps</p>

          <h3 class="text-5xl md:text-6xl font-bold mt-4">132+</h3>

          <p class="text-sm text-gray-200 mt-4">31 More Will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
