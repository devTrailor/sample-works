import { Col, Container, Row } from "react-bootstrap";
// styles
import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xl={12}>
          <div className={styles.createdBy}>
            &copy; Copyright - 2024, <span>Ritik Sharma</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
