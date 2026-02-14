import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

type handleDonateClick = {
  handleDonateClick: () => void;
};
export default function Banner({ handleDonateClick }: handleDonateClick) {
  return (
    <section className="bg-[#f8f8f8] py-1">
      <div className="mx-auto max-w-screen-7xl px-6">
        <div className=" rounded-3xl bg-[#00aa9e] text-white p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          {/* TEXT */}
          <div className="text-center md:text-left space-y-4 max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-white/90">
              Your Support Saves Lives
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Partner with ANI Care to build stronger, healthier communities
            </h2>

            <p className="text-white/90">
              Every donation helps us provide medical outreach, essential
              supplies, and life-saving care to families across Somalia.
            </p>
          </div>

          {/* BIG WHITE BUTTON */}
          <button
            className="flex items-center gap-3 bg-white  text-[#00aa9e] px-12 py-5 text-lg rounded-full font-semibold shadow-md hover:bg-[#e8e8e8] transition"
            onClick={handleDonateClick}
          >
            <FontAwesomeIcon icon={faHandHoldingDollar} className="text-xl" />
            Donate Today
          </button>
        </div>
      </div>
    </section>
  );
}

