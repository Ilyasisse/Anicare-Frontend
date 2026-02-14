import img from "../assets/doctor-looking-at-a-book.png";
export default function AboutHero() {
  return (
    <div className="flex flex-col md:flex-col items-center justify-between p-6 font-serif">
      {/* Text */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 font-serif">
        <div className="md:w-1/2 text-left py-10 lg:max-w-5xl">
          <h1 className="text-4xl font-bold mb-2">Our Mission</h1>

          {/* small text under title */}
          <p className="text-sm text-[#00aa9e] font-medium mb-4">
            Expanding access to care for every community
          </p>

          {/* longer description */}
          <p className="text-gray-600 leading-relaxed">
            Our mission is to expand access to quality healthcare services
            across Somalia by supporting local communities, strengthening
            medical resources, and creating sustainable solutions that improve
            everyday lives. Through partnerships, innovation, and compassion, we
            strive to ensure that every individual receives the care they
            deserve — step by step, village by village. By training healthcare
            professionals, improving facilities, and investing in long-term
            health education, we work to build resilient systems that empower
            communities and create lasting change for future generations.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center ">
          <img
            src={img}
            alt="mission"
            className="w-full max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md border rounded-lg border-gray-100 "
          />
        </div>
      </div>
    </div>
  );
}
