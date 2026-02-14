import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headerImg from "../assets/doctor_standing_in_a_line.jpg";
import {
  faAngleRight,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

type handleDonateClick = {
  handleDonateClick: () => void;
};
export default function Header({ handleDonateClick }: handleDonateClick) {
  return (
    <header className="bg-[#f8f8f8] font-serif">
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-sm text-gray-600">Together, we can</p>

            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              We Can Break Barriers and Build Equitable Access to Healthcare for
              All
            </h1>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                className="w-full sm:w-auto border bg-[#00aa9e] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#007a72] transition flex items-center justify-center gap-2"
                onClick={handleDonateClick}
              >
                <span>Donate</span>
                <FontAwesomeIcon icon={faHandHoldingDollar} />
              </button>
              <Link to={"/about_us"}>
                <button className="w-full sm:w-auto border border-gray-200 px-6 py-3 rounded-full font-semibold hover:bg-[#e8e8e8] transition">
                  <span>Learn More</span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <img src={headerImg} className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </section>
    </header>
  );
}
