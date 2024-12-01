import NewsSkleton from "@/components/widgets/news/NewsSkleton";
import NewsItem from "@/components/widgets/news/NewsItem";
import Section from "@/components/ui/section";
import { Col, Row } from "antd";
import RightAside from "../../../components/common/RighAside";
function NewsSection({
  items,
  loading,
  title,
  authorImage = false,
  cards = false,
}) {
  return (
    <Section title={title} loading={loading} authorImage={authorImage}>
      {cards && <RightAside visible={"block lg:hidden"} />}
      <Row gutter={[16, 16]}>
        {items.map((item, index) => (
          <Col
            key={index}
            xs={{ span: 24 }}
            sm={24}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            {loading ? (
              <>
                <NewsSkleton />
              </>
            ) : (
              <NewsItem item={item} />
            )}
          </Col>
        ))}
      </Row>
    </Section>
  );
}

export default NewsSection;
