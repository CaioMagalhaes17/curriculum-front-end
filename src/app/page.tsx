import AboutCard from "./components/AboutCard/AboutCard";
import MainCard from "./components/MainCard/MainCard";
import "./globals.css";

export default function Page() {
  return (
    <>
      <div className="content">
        <MainCard/>
        <AboutCard/>
      </div>
    </>
  )
}
