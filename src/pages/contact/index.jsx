import { Col } from "antd";
import Map from "./components/map";
import ContactForm from "./components/ContactForm";

function ContactPage() {
  return (
    <>
      <Col
        className="lg:mt-5 mt-[150px] px-2 overflow-hidden "
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={12}
      >
        <ContactForm />
      </Col>
      <Col className="px-2" xs={24} sm={24} md={12} lg={12} xl={12}>
        <Map />
      </Col>
      <div className="mt-3 px-2 text-skyBlue">
        <address>Street: E. Eliyev Kuc. 13 Az1033 </address>
        <address>City: Absheron State/province/area: Baku</address>
        <address>Phone number: 994 12 4966168</address>
      </div>
    </>
  );
}

export default ContactPage;
