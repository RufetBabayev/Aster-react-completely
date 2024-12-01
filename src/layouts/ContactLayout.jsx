import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Logo from "../components/common/Logo";
import ContactPage from "../pages/contact";
import { Col, Row } from "antd";
function ContactLayout() {
  return (
    <main className="lg:w-[1300px] mx-auto  ">
      <Row>
        <Col
          className="flex space-x-4 mb-4"
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
        >
          <div className="lg:block hidden">
            <Logo />
          </div>
          <div className="mt-2">
            <Header />
          </div>
        </Col>
        <ContactPage />
      </Row>
      <Footer />
    </main>
  );
}

export default ContactLayout;
