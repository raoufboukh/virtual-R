import { videos } from "./constants";

const Landing = () => {
  return (
    <section className="pt-36">
      <div className="container">
        <div className="md:w-[600px] mx-auto ">
          <h2 className="text-white text-5xl md:text-6xl  text-center leading-[1.1] mb-5">
            VirtualR build tools <span className="text-orange-400">for </span>
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text">
              developers
            </span>
          </h2>
          <p className="text-gray-600 text-center text-sm">
            Empower your creativity and bring your VR app ideas to life with our
            inutuitive development tools get started today and turn your
            imagination into immersive reality!
          </p>
          <div className="flex items-center gap-5 justify-center my-5">
            <button className="bg-gradient-to-r from-orange-400 to-orange-700 rounded-md text-white p-2">
              Start for free
            </button>
            <button className="border border-white text-white p-2 rounded-md">
              Documentation
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 my-20">
          {videos.map((video) => {
            return (
              <div key={video.id} className="relative">
                <video
                  className={`w-full ${video.style}`}
                  src={video.video1}
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Landing;
