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

  console.log("API:", import.meta.env.VITE_SERVER_API_URL);

  return (
    <div className="flex gap-4 justify-center mt-20">
      <button onClick={() => createSession(10)}>Donate $10</button>
      <button onClick={() => createSession(25)}>Donate $25</button>
      <button onClick={() => createSession(50)}>Donate $50</button>
      
    </div>
  );
};

export default Donation;
