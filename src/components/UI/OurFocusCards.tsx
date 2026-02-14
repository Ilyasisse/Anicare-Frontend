import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type ProgramSideBySide = {
  icon: IconDefinition;
  title: string;
  paragraph: string;
  linkText: string;
  href: string;
};

const OurFocusCards = ({
  icon,
  title,
  paragraph,
  linkText,
  href,
}: ProgramSideBySide) => {
  return (
    <div className="flex-col flex gap-4 p-6 border rounded-2xl border-gray-100 shadow-sm bg-[#f8f8f8] hover:shadow-md transition">
      <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
        <FontAwesomeIcon icon={icon} className="text-[#00aa9a] text-xl" />
      </div>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-gray-600">{paragraph}</p>
      <a href={href} className="text-[#00aa9e] hover:text-[#007a72] transition">
        <span>{linkText}</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </a>
    </div>
  );
};

export default OurFocusCards;
