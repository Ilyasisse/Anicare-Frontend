// import { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHandHoldingDollar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate("/donation");
  };

  return (
    <>
      <nav className="w-full bg-[#f8f8f8] font-serif flex items-center px-6">
        {/* LEFT — Logo */}
        <img src={logo} alt="" width={205} />

        {/* CENTER — Links */}

        <div className="hidden lg:flex flex-1 justify-center gap-6 text-xl text-[#00aa9e]">
          <Link to={"/"} className="hover:text-[#007a72] transition">
            Home
          </Link>
          <Link to={"/about_us"} className="hover:text-[#007a72] transition">
            About Us
          </Link>
          <Link to={"/projects"} className="hover:text-[#007a72] transition">
            Projects
          </Link>
          <Link to={"/blogs"} className="hover:text-[#007a72] transition hidden">
            Blog
          </Link>
          <Link
            to={"/get_involved"}
            className="hover:text-[#007a72] transition"
          >
            Get Involved
          </Link>
        </div>

        {/* RIGHT — Donate */}
        <button
          className=" hidden lg:flex bg-[#00aa9e] text-white  px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#007a72] hover:shadow-lg transition items-center gap-2"
          onClick={handleDonateClick}
        >
          <span>Donate</span>
          <FontAwesomeIcon icon={faHandHoldingDollar} />
        </button>

        {/* Burger Button (mobile only) */}
        <button
          className="lg:hidden ml-auto text-2xl border-none cursor-pointer transition ease-in"
          onClick={() => setMenuOpen(true)} // toggle
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 bg-white p-6 shadow-md z-1 fixed top-0 bottom-0 left-0 right-0 w-full h-full scroll">
          <button
            className="lg:hidden ml-auto text-2xl border-none cursor-pointer"
            onClick={() => setMenuOpen(false)} // toggle
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className=" flex-1 justify-center items-center flex flex-col bg-white gap-12 text-center font-bold text-2xl">
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to={"/about_us"} onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to={"/projects"} onClick={() => setMenuOpen(false)} >
              Projects
            </Link>
            <Link to={"/blog"} onClick={() => setMenuOpen(false)} className="hidden">
              Blog
            </Link>
            <Link to={"/get_involved"} onClick={() => setMenuOpen(false)}>
              Get Involved
            </Link>

            <button
              onClick={() => {
                setMenuOpen(false);
                handleDonateClick();
              }}
              className="bg-[#00aa9e] text-white px-12 py-3 rounded border-none gap-3 flex items-center justify-center"
            >
              <span>Donate</span>
              <FontAwesomeIcon icon={faHandHoldingDollar} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
