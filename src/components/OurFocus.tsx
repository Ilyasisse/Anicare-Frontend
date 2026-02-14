import {
  faGraduationCap,
  faHandshake,
  faHeart,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import OurFocusCards from "./UI/OurFocusCards";
import OurNumberThatSpeak from "./UI/OurNumberThatSpeak";

export default function Impact() {
  return (
    <section className="bg-white font-serif">
      <div className="mx-auto px-6 py-12">
        {/*Heading*/}
        <div className="w-full lg: flex flex-col justify-center text-center lg:text-left gap-6">
          <h2 className="text-sm font-semibold text-[#00aa9e] lg:text-center">
            Our Focus
          </h2>
          <h1 className="text-4xl lg: text-center ">
            How ANI Care Creates Impact
          </h1>
          <p className="text-lg  text-center">
            ANI Care is transforming Somalia's healthcare system through five
            strategic pillars designed to create lasting, scalable impact.
          </p>
        </div>
        {/*Cards */}
        <div className=" mt-10 flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <OurFocusCards
            icon={faGraduationCap}
            title="We Educate"
            paragraph="We train and mentor healthcare professionals—doctors, nurses,
              midwives, and community health workers—to build a skilled,
              resilient workforce capable of driving systemic change"
            linkText="About Us"
            href="/about_us"
          />
          <OurFocusCards
            icon={faLightbulb}
            title="We Innovate"
            paragraph="We design and implement creative, context-driven solutions from
              mobile health units to technology-enabled programs that expand
              access to care in even the most remote communities."
            href="/projects"
            linkText="Projects"
          />
          <OurFocusCards
            icon={faHeart}
            title="Support"
            paragraph="We strengthen health infrastructure and service delivery by
              building clinics, upgrading facilities, and providing essential
              resources to ensure reliable, high-quality care for all."
            linkText="Get Involved"
            href="/get_involved"
          />
          <OurFocusCards
            title="Partner"
            icon={faHandshake}
            href="/donate"
            linkText="Donate"
            paragraph="we work hand in hand with communities, government, institution and
              the Somail diasporato co-create sustainable solutions that are
              culurally grounded and scalable"
          />
        </div>
        {/*Stats Row*/}
        <div className=" flex flex-col  gap-6 p-6 mt-6 font-sans md:flex-row ">
          <div className="flex text-center items-center flex-col gap-6 md:w-1/2 md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl  font-bold leading-tight">
              Our numbers that speak
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md md:max-w-none">
              Though we are a growing organization, each milestone reflects our
              commitment to expanding healthcare access in Somalia. These early
              achievements show the impact we are building step by step,
              community by community, bringing hope, essential services, and
              lasting change to families who need support most.
            </p>
          </div>
          <div className="mt-6 rounded-2xl bg-[#f8f8f8] border border-gray-100 p-10 md:w-1/2 hover:shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16 text-center  lg:grid-cols-2 xl:grid-cols-4 ">
              <OurNumberThatSpeak amount={315} paragraph="People reached" />
              <OurNumberThatSpeak amount={5} paragraph="Community events" />
              <OurNumberThatSpeak amount={10} paragraph="Local Partners" />
              <OurNumberThatSpeak amount={15} paragraph="Partner clinics" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
