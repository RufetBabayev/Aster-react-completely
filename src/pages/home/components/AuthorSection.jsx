import Section from "@/components/ui/section";
import { Col, Row } from "antd";
import AuthorSkleton from "../../../components/widgets/author/AuthorSkleton";
import AuthorItem from "../../../components/widgets/author/AuthorItem";
function AuthorSection({ title, items = [], loading }) {
  return (
    <Section title={title} loading={loading}>
      <Row
        className="lg:space-x-[25px] mb-[-100px] lg:mb-[-50px]"
        gutter={[0, 16]}
      >
        {items.map((item, index) => (
          <Col
            className="!p-0 ml-2 lg:ml-0"
            key={index}
            xs={{ span: 7 }}
            lg={{ span: 4 }}
          >
            {loading ? (
              <>
                <AuthorSkleton />
              </>
            ) : (
              <AuthorItem item={item} />
            )}
          </Col>
        ))}
      </Row>
    </Section>
  );
}

export default AuthorSection;
