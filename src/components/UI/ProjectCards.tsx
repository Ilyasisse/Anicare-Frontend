type ProgramSideBySide = {
  img: string;
  title: string;
  paragraph: string;
};

const ProjectCards = ({ img, title, paragraph }: ProgramSideBySide) => {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 border border-[#00b3c7]">
      <img
        src={img}
        className="w-full h-auto max-h-48 object-cover rounded-xl mb-4"
      />

      <div className="flex justify-between items-center text-sm mb-2">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          ongoing
        </span>
        <span className="text-gray-500">Bosaso, Somalia</span>
      </div>

      <h3 className="text-lg font-semibold mb-2 lg">{title}</h3>

      <p className="text-gray-600 mb-4">{paragraph}</p>

      {/* <button className="text-[#00aa9e] font-medium hover:underline">
        View Details →
      </button> */}
    </div>
  );
};

export default ProjectCards;
