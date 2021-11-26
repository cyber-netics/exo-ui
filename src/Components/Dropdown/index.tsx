import React, { useState } from "react";
import { ElemColorTypes } from "Shared";
import { Container, Header, Body, Divider } from "./styles";

export interface DropdownProps extends ElemColorTypes {
  header: string;
  className?: string;
  children?: JSX.Element;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const [active, setStatus] = useState(false);
  const [init, initialize] = useState(false);

  const handleToggle = () => {
    setStatus(!active);
    initialize(true);
  };

  return (
    <Container>
      <Header
        onClick={handleToggle}
        colorType={props.color}
        className="drop-header"
      >
        <>{props.header}</>
      </Header>

      <Divider active={active} />

      <Body
        init={!init}
        active={active}
        colorType={props.color}
        className={props.className}
      >
        <>{props.children}</>
      </Body>
    </Container>
  );
};

export default Dropdown;
