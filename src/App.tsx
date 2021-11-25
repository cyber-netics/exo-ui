import React from "react";
import styled from "styled-components";
import Button from "Components/Button";
import Checkbox from "Components/Checkbox";
import { Input, InputEmail, InputNumber } from "Components/Input";

const Section = styled.div`
  padding: 10px 0;
`;

const App: React.FC = () => {
  return (
    <div>
      <div>
        <h2>Primary</h2>
        <Section>
          <Button color="primary" size="small" loading={true}>
            Submit
          </Button>
        </Section>
      </div>
      <div>
        <h2>Dark</h2>
        <Section>
          <Button color="dark" size="small" loading={true}>
            Submit
          </Button>
        </Section>
      </div>
      <div>
        <div>
          <h2>Primary</h2>
          <Checkbox className="testclass" />
        </div>
      </div>
      <div>
        <div>
          <h2>Primary</h2>
          <Input error={true} />
        </div>
        <div>
          <h2>Primary</h2>
          <InputEmail />
        </div>
        <div>
          <h2>Primary</h2>
          <InputNumber error={true} />
        </div>
      </div>
    </div>
  );
};

export default App;
