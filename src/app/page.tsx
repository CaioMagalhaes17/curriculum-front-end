import AboutCard from "./components/AboutCard/AboutCard";
import AcademicsCard from "./components/AcademicsCard/AcademicsCard";
import ExperiencesCard from "./components/ExperiencesCard/ExperiencesCard";
import MainCard from "./components/MainCard/MainCard";
import "./globals.css";

export default function Page() {
  return (
    <>
      <div className="content">
        <MainCard/>
        <AboutCard/>
        <ExperiencesCard/>
        <AcademicsCard/>
      </div>
    </>
  )
}
