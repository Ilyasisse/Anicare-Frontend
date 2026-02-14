import Header from "../components/Header";
import OurFocus from "../components/OurFocus";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate("/donation");
  };

  return (
    <>
      <Header handleDonateClick={handleDonateClick} />
      <OurFocus />
      <Banner handleDonateClick={handleDonateClick} />
    </>
  );
}
