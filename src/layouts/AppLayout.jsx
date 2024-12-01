import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import NavbarComponent from "../components/common/Navbar/NavbarComponenet";
import RightAside from "../components/common/RighAside";
import SliderCard from "../components/widgets/slider";
import Subscription from "../components/widgets/subscription";
import SubscribeEmail from "../components/widgets/subscription/subscribe";

function AppLayout({ children }) {
  return (
    <main className="lg:w-[1300px]  mx-auto flex lg:gap-x-[45px] overflow-hidden relative">
      <div className="md:w-[240px]  lg:w-[240px] shrink-0 sticky top-0">
        <div>
          <NavbarComponent classForResponsive={"hidden lg:block md:block"} />
          <Subscription className={"mt-[40px]"} />
        </div>
      </div>
      <div className="flex-1">
        <Header />

        <div className="flex lg:gap-x-[45px]">
          <div className="flex-1">
            {children}
            <SliderCard className={"lg:hidden block"} />
            <SubscribeEmail
              className={"lg:hidden block"}
              block={true}
              p={"p-2"}
            />
            <Footer />
          </div>
          <div className="w-0 lg:w-[260px] shrink-0 ">
            <RightAside visible={"hidden lg:block"} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AppLayout;
