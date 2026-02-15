import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../assets/Kids_Pictures.jpg";
import { faDollarSign, faHeart, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type CheckoutResponse = {
  url: string;
};

const Donation = () => {
  const createSession = async (amount: number) => {
    const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;
    const res = await fetch(`${SERVER_API_URL}/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Backend error:", res.status, text);
      return;
    }

    const data: CheckoutResponse = await res.json();
    if (data.url) window.location.href = data.url;
  };

  const presets = [
    { id: 1, amount: 25 },
    { id: 2, amount: 50 },
    { id: 3, amount: 100 },
    { id: 4, amount: 250 },
    { id: 5, amount: 500 },
    { id: 6, amount: 1000 },
  ];

  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [selectedPresetId, setSelectedPresetId] = useState<number | null>(null); // FIX: track clicked preset (prevents accidental blue highlight)

  const handlePresetClick = (amt: number, id: number) => { // FIX: accept id
    setSelectedAmount(amt);
    setSelectedPresetId(id); // FIX: mark which preset is clicked
    setCustomAmount("");
    setError("");
  };

  function handleDonate() {
    if (selectedAmount < 5) { // FIX: min is $5, so only block if < 5 (not <= 5)
      setError("Minimum donation amount is $5");
      return;
    }
    setError("");
    createSession(selectedAmount);
  }

  return (
    <section className="w-full px-6 py-6"> {/* FIX: better page padding + lets container control width */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8 font-serif"> {/* FIX: center content + limit width */}

        <div className="flex flex-col gap-6 md:flex-row md:items-center"> {/* FIX: items-center for nicer hero alignment */}
          <div className="text-center md:text-left flex flex-col justify-center md:w-1/2 lg:flex gap-2"> {/* FIX: md:text-left */}
            <p className="text-sm text-gray-600">
              Every donation heals, empowers, and transforms lives.
            </p>
            <h1 className="text-3xl font-bold">Donate to ANI Care</h1>
            <h2 className="text-[#007a72] text-lg">
              Your generosity transforms lives. Every donation helps us provide
              education, healthcare, clean water, and hope to communities in
              Bosaso, Somalia.
            </h2>
          </div>

          <figure className="md:w-1/2 w-full"> {/* FIX: removed invalid lg:max-w-180 + rounded-5xl */}
            <img
              src={img}
              alt="Children supported by ANI Care" // FIX: add meaningful alt text
              className="rounded-xl w-full h-auto object-cover opacity-90" // FIX: object-cover for cleaner image presentation
            />
          </figure>
        </div>

        {/* DONATION SECTION */}
        <div className="flex flex-col gap-6 items-center text-center border border-gray-200 rounded-md p-6">
          <div className="flex items-center justify-center gap-2"> {/* FIX: slightly nicer spacing */}
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
            <h1 className="text-lg font-bold">Choose Your Donation Amount</h1>
          </div>

          <p className="text-sm text-gray-500">
            All donations directly impact our organization and help us further our mission.
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
            {presets.map((value) => (
              <button
                key={value.id}
                onClick={() => handlePresetClick(value.amount, value.id)} // FIX: pass id
                type="button"
                className={`h-14 rounded-md border text-lg font-light transition
                  ${
                    selectedPresetId === value.id && customAmount === "" // FIX: blue only if preset was clicked + custom is empty
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white border-gray-300 hover:bg-green-200"
                  }`}
              >
                ${value.amount}
              </button>
            ))}
          </div>

          <div className="w-full">
            <h2 className="text-center font-semibold mb-2">Custom Amount (USD)</h2> {/* FIX: center + spacing */}

            <div className="relative w-full"> {/* FIX: remove text-center from wrapper so icon aligns perfectly */}
              <FontAwesomeIcon
                icon={faDollarSign}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold pointer-events-none" // FIX: pointer-events-none
              />
              <input
                type="number"
                min={5} // FIX: enforce minimum at input level too
                placeholder="Enter Amount"
                value={customAmount}
                onChange={(event) => {
                  const value = event.target.value;
                  setCustomAmount(value);
                  setSelectedAmount(Number(value) || 0);
                  setSelectedPresetId(null); // FIX: typing custom removes preset selection (no blue)
                  setError("");
                }}
                className={`w-full h-12 pl-10 pr-4 rounded-md border font-sans
                  ${customAmount !== "" ? "border-blue-500" : "border-gray-300"}
                  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500`}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-2 text-center w-full font-sans leading-tight">
                {error}
              </p>
            )}

            <button
              type="button"
              className="mt-6 w-full h-14 rounded-md bg-orange-500 hover:bg-orange-600
                         text-white font-semibold flex items-center justify-center gap-3 transition duration-200"
              onClick={handleDonate}
            >
              <FontAwesomeIcon icon={faHeart} />
              <span>Donate Now</span>
            </button>

            <div className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center gap-2"> {/* FIX: align lock + text nicely */}
              <FontAwesomeIcon icon={faLock} className="text-[#65D433]" />
              <span>Secure payment processing powered by Stripe</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Donation;
