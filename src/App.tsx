import React from "react";
import styled from "styled-components";
import Button from "Components/Button";

const Section = styled.div`
  padding: 10px 0;
`;

const App: React.FC = () => {
  return (
    <div>
      <h2>Primary</h2>
      <Section>
        <Button color="dark" size="small" loading={true}>
          Submit
        </Button>
      </Section>
    </div>
  );
};

export default App;
