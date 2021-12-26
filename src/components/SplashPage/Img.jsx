import React from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Img(props) {
  return (
    <Container>
      <Col md={12}>
        <Image src={props.img} fluid />
      </Col>
    </Container>
  );
}

export default Img;
