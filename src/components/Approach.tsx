import {
  faAngleRight,
  faBullseye,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Approach() {
  return (
    <div className="flex flex-col md:flex-col items-center justify-between p-6 font-serif">
      <div className="text-5xl text-center mt-8">
        <h1>Our Approach</h1>
      </div>
      <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <div className="flex-col flex gap-4 p-6 border rounded-2xl border-gray-100 shadow-sm bg-[#f8f8f8] hover:shadow-md transition">
          <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon
              icon={faBullseye}
              className="text-[#00aa9a] text-xl"
            />
          </div>
          <h2 className="text-2xl">Our Misson</h2>
          <p className="text-[#007a72] text-sm">
            Expanding access to care for every community
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to ensure that every Somali has access to reliable,
            quality healthcare when and where they need it. By strengthening
            local resources, training healthcare professionals, and supporting
            underserved areas, we work to remove barriers to care and improve
            everyday lives across the nation.
          </p>

          <a
            href="/about_us"
            className="text-[#00aa9e] hover:text-[#007a72] transition"
          >
            <span>About Us</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
        <div className="flex-col flex gap-4 p-6 border rounded-2xl border-gray-100 shadow-sm bg-[#f8f8f8] hover:shadow-md transition">
          <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faEye} className="text-[#00aa9a] text-xl" />
          </div>
          <h2 className="text-2xl">Our Vision</h2>
          <p className="text-[#007a72] text-sm">
            A healthier future with no one left behind
          </p>
          <p className="text-gray-600 leading-relaxed">
            We envision a Somalia where every individual and family can receive
            timely, affordable, and equitable healthcare services. Through
            innovation, partnerships, and sustainable solutions, we aim to build
            strong health systems that empower communities and create lasting
            impact for generations to come.
          </p>

          <a
            href="/projects"
            className="text-[#00aa9e] hover:text-[#007a72] transition"
          >
            <span>Projects</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
        <div className="flex-col flex gap-4 p-6 border rounded-2xl border-gray-100 shadow-sm bg-[#f8f8f8] hover:shadow-md transition">
          <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-[#00aa9a] text-xl"
            />
          </div>
          <h2 className="text-2xl">Our Values</h2>
          <p className="text-[#007a72] text-sm">
            Guided by compassion, integrity, and trust
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our work is rooted in empathy, respect, and accountability. We
            listen to the needs of the communities we serve, act with
            transparency, and collaborate with partners to deliver meaningful
            and ethical solutions. These values guide every decision we make and
            every life we strive to improve.
          </p>
          <a
            href="/get_involved"
            className="text-[#00aa9e] hover:text-[#007a72] transition"
          >
            <span>Get Involved</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
      </div>
    </div>
  );
}
