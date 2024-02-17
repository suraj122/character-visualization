import { Link } from "react-router-dom";

const SingleCharShimmer = () => {
  return (
    <main className="bg-gray-900 py-8 text-white">
      <header className="max-w-7xl mx-auto">
        <Link to="/" className="bg-orange-600 font-semibold px-4 py-2 rounded">
          👈 See All Characters
        </Link>
      </header>
      <section className="container mx-auto py-24 px-16">
        <div className="max-w-7xl mx-auto w-full xl:flex items-center justify-center gap-32">
          <header className="w-1/4">
            <div className="w-[300px] h-[300px] inline-block bg-gray-800" />
          </header>
          <div className="w-1/4">
            <div className="h-2 bg-gray-800"></div>
            <div className="h-2 bg-gray-800"></div>
            <div className="mt-6">
              <div className="h-2 bg-gray-800"></div>
              <div className="mt-4 h-2 bg-gray-800"></div>

              <div className="mt-4 h-2 bg-gray-800"></div>
              <div className="mt-4 h-2 bg-gray-800"></div>
              <div className="mt-4 h-2 bg-gray-800"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleCharShimmer;
