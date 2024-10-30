import { features } from "./constants";

const Features = () => {
  return (
    <section>
      <div className="container">
        <h4 className="text-orange-500 text-center uppercase">Features</h4>
        <h2 className="text-white text-5xl md:text-6xl my-10 text-center">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(310px,1fr))]">
          {features.map((fea) => {
            return (
              <div key={fea.id} className="bg-[rgb(20_20_20)] px-7 py-5">
                <div className="flex items-center gap-4">
                  <span className="text-orange-500 text-lg p-2 bg-[rgb(28_28_28)] rounded-full">
                    {fea.icon}
                  </span>
                  <h3 className="text-white font-bold text-lg">{fea.title}</h3>
                </div>
                <p className="text-gray-600 my-7 px-2">{fea.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
