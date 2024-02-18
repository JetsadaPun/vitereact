import {
  faGithub,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from "../../assets/littlelemon.png";
import piclittlelemon from "../../assets/exp-site.png";
import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div className="space-y-4">
      <div className="text-primaryAccent font-medium">Experience</div>
      <div
        className={`grid grid-cols-[25%_75%] bg-gray-400 rounded-md px-2 py-6 transition-all ${isMouseEnter["exp1"] ? "bg-gray-400" : ""}`}
        onMouseEnter={() => setIsMouseEnter({'exp1': true})}
        onMouseLeave={() => setIsMouseEnter({'exp1': false})}
      >
        <div>
          <div>
            <span className={`text-sm ${isMouseEnter["exp1"] ? "text-primaryTitle" : ""}`}>2022-2023</span>
          </div>
          <div>
            <img src={picExp} className="w-5/6 rounded-md border-primarySubcontent" />
          </div>
        </div>
        <div className="grid gap-y-4">
          <div className={`text-primaryAccent ${isMouseEnter["exp1"] ? "text-primaryTitle":""}`}>
            Fullstack · Sport Analysis System
            <FontAwesomeIcon icon={faArrowRight} className={`text-sm -rotate-45 duration-500 ease-in-out ${isMouseEnter['exp1'] ? "translate-x-1 -translate-y-1": ""}` }/>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/JetsadaPun" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://github.com/JetsadaPun"  target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faMedium} /></a>
            <a href="https://github.com/JetsadaPun"  target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
          <div className="text-sm">
            Designing and developing a sports data analysis system that scrapes
            data from various sports websites, processes it, and presents
            different profit-making possibilities in real-time for customers.
          </div>
          <div className="flex gap-4 text-sm">
            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter["exp1"] ? "text-primaryTitle" : ""} hover:text-primaryTitle`}>
              React
            </div>
            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter["exp1"] ? "text-primaryTitle" : ""} hover:text-primaryTitle`}>
              Tailwind
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[25%_75%] rounded-md px-2 py-6"
      onMouseEnter={() => setIsMouseEnter({'exp2': true})}
      onMouseLeave={() => setIsMouseEnter({'exp2': false})}>
        <div>
          <div>
            <span className="text-sm">2022-2023</span>
          </div>
          <div>
            <img src={piclittlelemon} className="w-5/6 rounded-md border-primarySubcontent" />
          </div>
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
            <div className="bg-primarySubcontent px-2 py-1 rounded-md hover:text-primaryTitle">
              React
            </div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-md hover:text-primaryTitle">
              Tailwind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
