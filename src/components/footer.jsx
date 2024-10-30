import { communityLinks, platformLinks, resourcesLinks } from "./constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-5 text-white flex gap-10 lg:gap-0 border-t-2 border-gray-600 justify-around flex-wrap">
        <ul className="basis-full sm:basis-[40%] lg:basis-[20%] text-center lg:text-left">
          <h3 className="font-bold mb-3">Ressources</h3>
          {resourcesLinks.map((link) => {
            return (
              <li
                className="text-gray-600 my-1  cursor-pointer hover:translate-x-2 transition-all duration-300"
                key={link.id}
              >
                {link.text}
              </li>
            );
          })}
        </ul>
        <ul className="basis-full sm:basis-[40%] lg:basis-[20%] text-center lg:text-left">
          <h3 className="font-bold mb-3">Platform</h3>
          {platformLinks.map((link) => {
            return (
              <li
                className="text-gray-600 my-1 cursor-pointer hover:translate-x-2 transition-all duration-300"
                key={link.id}
              >
                {link.text}
              </li>
            );
          })}
        </ul>
        <ul className="basis-full sm:basis-[40%] lg:basis-[20%] text-center lg:text-left">
          <h3 className="font-bold mb-3">Community</h3>
          {communityLinks.map((link) => {
            return (
              <li
                className="text-gray-600 my-1 cursor-pointer hover:translate-x-2 transition-all duration-300"
                key={link.id}
              >
                {link.text}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
