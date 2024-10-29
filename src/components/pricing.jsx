import { pricing } from "./constants";
import { MdOutlineCheckCircle } from "react-icons/md";

const Pricing = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-white text-center text-5xl">Pricing</h2>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(310px,1fr))] my-8">
          {pricing.map((price) => {
            return (
              <div
                key={price.id}
                className="py-5 px-7 border border-gray-500 rounded-md text-white"
              >
                <h3 className="text-4xl my-3">
                  {price.title}{" "}
                  {price.title2 && (
                    <span className="text-base text-orange-500">
                      ({price.title2})
                    </span>
                  )}
                </h3>
                <h4 className="text-4xl my-3">
                  ${price.price}{" "}
                  <span className="text-gray-600 text-sm">/Month</span>
                </h4>
                <p className="flex items-center gap-1 text-lg my-2">
                  <MdOutlineCheckCircle /> {price.desc1}
                </p>
                <p className="flex items-center gap-1 text-lg my-2">
                  <MdOutlineCheckCircle /> {price.desc2}
                </p>
                <p className="flex items-center gap-1 text-lg my-2">
                  <MdOutlineCheckCircle /> {price.desc3}
                </p>
                <p className="flex items-center gap-1 text-lg my-2">
                  <MdOutlineCheckCircle /> {price.desc4}
                </p>
                <button className="w-full block text-center border my-6 p-2 rounded-md border-orange-500">
                  Subscribe
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
