import React from "react";
import { Row, Col } from "Components/Grid";

interface IProps {
  children: JSX.Element[];
}

const Field: React.FC<IProps> = (props) => {
  return (
    <Row>
      {props.children.length ? (
        <Col col={1}>
          <>{props.children}</>
        </Col>
      ) : (
        props.children.map((child, index) => (
          <Col key={index} col={props.children.length}>
            <>{child}</>
          </Col>
        ))
      )}
    </Row>
  );
};

export default Field;
