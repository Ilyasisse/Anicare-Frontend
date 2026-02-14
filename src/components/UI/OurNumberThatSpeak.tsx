type ProgramSideBySide = {
  amount: number;
  paragraph: string;
};

const OurNumberThatSpeak = ({ amount, paragraph }: ProgramSideBySide) => {
  return (
    <div>
      <p className="text-4xl font-semibold text-[#00aa9e]">{amount}+</p>
      <p className="mt-2 text-gray-600">{paragraph}</p>
    </div>
  );
};

export default OurNumberThatSpeak;
