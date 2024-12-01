import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Logo from "../components/common/Logo";
import AboutPage from "../pages/about";
import { FaRegFileAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
function AboutLayout() {
  const info = [
    {
      icon: <FaRegFileAlt />,
      projects: 2097,
      projectTitle: " Projects and Plans",
    },
    {
      icon: <IoPersonSharp />,
      projects: 3590,
      projectTitle: "  Helped people",
    },
    {
      icon: <FiUsers />,
      projects: 74,
      projectTitle: " Volunteer",
    },
    {
      icon: <LuAlarmClock />,
      projects: 100,
      projectTitle: " Timing",
    },
  ];
  return (
    <div className="relative">
      <span className="fixed top-0 bg-[#F4F9F8] darkMode w-full z-[50]">
        <Logo />
      </span>
      <Header />
      <AboutPage info={info} />
      <Footer />
    </div>
  );
}

export default AboutLayout;
