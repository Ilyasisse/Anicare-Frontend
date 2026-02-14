import img from "../assets/painting _of_kids.jpg";
import img2 from "../assets/doctors_in_a_dark_room.jpg";
import img3 from "../assets/idirs_doing_blood_pressure.jpg";
import ProjectSideBySide from "../components/UI/ProjectSideBySide";
import ProjectSideBySideRight from "../components/UI/ProjectSideBySideRight";
import ProjectCards from "../components/UI/ProjectCards";

const Project = () => {
  return (
    <div className="flex flex-col bg-[#f8f8f8] md:flex-col items-center justify-between p-6 font-serif ">
      {/* Text */}
      <div className="flex flex-col md:flex-row items-center justify-between  gap-8 p-6 font-serif ">
        <div className=" text-center  lg:max-w-5xl xl:w-auto ">
          <h1 className="text-4xl xl:text-5xl font-bold mb-2 ">Our Projects</h1>

          {/* small text under title */}
          <p className="text-sm xl:text-lg text-[#00aa9e] font-medium mb-4 ">
            We strengthen Somalia’s healthcare system through sustainable,
            community-driven solutions.
          </p>

          {/* longer description */}
          <p className="text-gray-600 leading-relaxed lg:text-lg xl:text-xl">
            ANI Care is dedicated to improving healthcare access, quality, and
            equity across Somalia. Through our six core pillars, we build the
            foundation for lasting change in health systems and communities
            nationwide.
          </p>
        </div>
      </div>
      {/*Project Cards*/}
      <div className="md:hidden flex flex-col gap-8 ">
        <ProjectCards
          img={img}
          title="Community Health Education Days"
          paragraph="We bring essential health education directly to communities teaching families about hygiene, maternal care, nutrition, and disease prevention...."
        />
        <ProjectCards
          img={img2}
          title="Maternal & Child Health Initiative"
          paragraph="We strengthen maternal and child health through prenatal education, safe delivery support, and postnatal care..."
        />
        <ProjectCards
          img={img3}
          title="School Health Outreach Program"
          paragraph="We partner with schools to educate children on hygiene, oral health, menstrual health, and first aid..."
        />
      </div>
      {/*Project Side by Side */}
      <div className=" hidden md:flex gap-8 flex-col">
        <ProjectSideBySide
          img={img}
          title="Community Health Education Days"
          paragraph="We bring essential health education directly to communities teaching families about hygiene, maternal care, nutrition, and disease prevention. These outreach days empower people with knowledge to make informed decisions about their health and wellbeing"
        />
        <ProjectSideBySideRight
          img={img2}
          title="Maternal & Child Health Initiative"
          paragraph=" Health Initiative We strengthen maternal and child health through prenatal education, safe delivery support, and postnatal care. By empowering mothers and training local healthcare providers, we work to reduce preventable deaths and build healthier families."
        />
        <ProjectSideBySide
          img={img3}
          title="School Health Outreach Program"
          paragraph="We partner with schools to educate children on hygiene, oral health, menstrual health, and first aid. By starting early, we inspire healthy habits that shape stronger, more informed future generations."
        />
      </div>
    </div>
  );
};

export default Project;
