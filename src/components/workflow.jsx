import code from "../components/assets/code.jpg";
import { workflow } from "./constants";
import { MdOutlineCheckCircle } from "react-icons/md";
const Workflow = () => {
  return (
    <section className="pt-20" id="workflow">
      <div className="container">
        <h2 className="text-white text-4xl md:text-5xl text-center">
          Accelerate your{" "}
          <span className="bg-gradient-to-r bg-clip-text from-orange-400 to-orange-700 text-transparent">
            coding workflow
          </span>
        </h2>
        <div className="flex justify-center gap-4 lg:gap-0 lg:justify-between my-4 flex-wrap">
          <div className="basis-full lg:basis-[48%]">
            <img src={code} alt="" />
          </div>
          <div className="basis-full lg:basis-[48%]">
            {workflow.map((work) => {
              return (
                <div key={work.id} className="flex items-center gap-5 my-5">
                  <div className="text-green-500 text-2xl bg-[rgb(28_28_28)] p-2 rounded-full">
                    <MdOutlineCheckCircle />
                  </div>
                  <div>
                    <h3 className="text-white text-2xl">{work.title}</h3>
                    <p className="text-gray-600">{work.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
