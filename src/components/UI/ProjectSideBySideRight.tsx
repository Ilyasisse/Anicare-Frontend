type ProgramSideBySide = {
  img: string;
  title: string;
  paragraph: string;
};

const ProjectSideBySideRight = ({
  img,
  title,
  paragraph,
}: ProgramSideBySide) => {
  return (
    <div className=" flex gap-8 items-center max-w-180 lg:max-w-240 xl:max-w-260">
      <div className="w-1/2">
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-gray-500">Bosaso, Somalia</span>
          <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full ">
            Completed
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2 lg">{title}</h3>

        <p className="text-gray-600 mb-4 lg:text-lg  ">{paragraph}</p>

        {/* <button className="text-[#00aa9e] font-medium hover:underline">
          View Details →
        </button> */}
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={img} alt="" className="rounded-2xl " />
      </div>
    </div>
  );
};

export default ProjectSideBySideRight;
