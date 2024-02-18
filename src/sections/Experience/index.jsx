import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from "../../assets/littlelemon.png";
const Experience = () => {
  return (
    <div className="space-y-4">
        <div className="text-primaryAccent font-medium">Experience</div>
        <div className="grid grid-cols-[25%_75%]">
      <div>
        <div><span className="text-sm">2022-2023</span></div>
        <div><img src={picExp} className="w-5/6 rounded-md" /></div>
      </div>
      <div className="grid gap-y-4">
        <div className="text-primaryAccent">
          Fullstack · Sport Analysis System
        </div>
        <div className="flex gap-4 text-xl">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faMedium} />
            <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className="text-sm">
          Designing and developing a sports data analysis system that scrapes
          data from various sports websites, processes it, and presents
          different profit-making possibilities in real-time for customers.
        </div>
        <div className="flex gap-4 text-sm">
          <div className="bg-primarySubcontent px-2 py-1 rounded-md hover:text-primaryTitle">React</div>
          <div className="bg-primarySubcontent px-2 py-1 rounded-md hover:text-primaryTitle">Tailwind</div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Experience;
