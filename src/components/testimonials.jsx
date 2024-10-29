import { testimonials } from "./constants";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-white text-center text-5xl">
          What People Are Saying
        </h2>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(310px,1fr))] my-8">
          {testimonials.map((testi, index) => {
            return (
              <div key={index}>
                <div className="py-5 px-7 bg-[rgb(22_22_22)] rounded-md text-white">
                  <p className="mb-4">{testi.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-400">
                      <img className="w-full" src={testi.image} alt="" />
                    </div>
                    <div>
                      <h3 className="text-sm">{testi.user}</h3>
                      <h4 className="text-sm text-gray-600">{testi.company}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
