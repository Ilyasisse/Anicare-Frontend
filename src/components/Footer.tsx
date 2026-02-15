import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] border-t border-gray-200 mt-0.5">
      <div className="mx-auto max-w-screen-7xl px-6 py-1">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* LOGO / ABOUT */}
          <div className="space-y-4">
            <img src={logo} alt="" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Expanding equitable access to healthcare in Somalia through
              outreach, education, and community partnerships.
            </p>

            <button
              className="
              flex items-center gap-2
              bg-[#00aa9e]
              text-white
              px-5 py-2
              rounded-full
              text-sm
              font-semibold
              hover:bg-[#007a72]
              transition
            "
            >
              <FontAwesomeIcon icon={faHandHoldingDollar} />
              Donate
            </button>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to={"/"} className="hover:text-[#00aa9e]">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about_us"} className="hover:text-[#00aa9e]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/projects"} className="hover:text-[#00aa9e]">
                  Projects
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="hover:text-[#00aa9e] hidden">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/get_involved"} className="hover:text-[#00aa9e]">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* GET INVOLVED */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Get Involved</h4>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to={"#"} className="hover:text-[#00aa9e]">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#00aa9e]">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#00aa9e]">
                  Donate
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#00aa9e]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#00aa9e]" />
                Anicareso@gmail.com
              </li>

              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-[#00aa9e]" />
                +252 90 7128685
              </li>

              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#00aa9e]"
                />
                Bosaso, Puntland, Somalia
              </li>
            </ul>
          </div>

          {/* Social Media */}
          {/* SOCIAL MEDIA ROW */}
          {/* SOCIAL MEDIA */}
        </div>
        <div className=" mt-0 text-center pt-6 border-t border-gray-200 flex flex-col md:flex items-center justify-between gap-4 md:text-center  ">
          <p className="text-sm text-gray-500">
            Follow ANI Care on social media
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 text-xl text-gray-600 w-full">
          <a
            href="https://www.facebook.com/anicareorg"
            target="_blank"
            className="hover:text-[#00aa9e] hover:scale-110 transition"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="https://www.instagram.com/anicareorg"
            target="_blank"
            className="hover:text-[#00aa9e] hover:scale-110 transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://x.com/anicareorg"
            target="_blank"
            className="hover:text-[#00aa9e] hover:scale-110 transition"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-[#00aa9e] hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-4 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ANI Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
