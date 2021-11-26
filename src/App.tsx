import React from "react";
import styled from "styled-components";

import Badge from "Components/Badge";
import Field from "Components/Field";
import Radio from "Components/Radio";
import Button from "Components/Button";
import Checkbox from "Components/Checkbox";
import Thumbnail from "Components/Thumbnail";
import Breadcrumb from "Components/Breadcrumb";
import Select, { Option } from "Components/Select";
import Dropdown from "Components/Dropdown";

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
      <div>
        <div>
          <h2>Small</h2>
          <Radio size="small" />
        </div>
        <div>
          <h2>Medium</h2>
          <Radio size="medium" />
        </div>
        <div>
          <h2>Large</h2>
          <Radio color={"dark"} size="large" />
        </div>
      </div>
      <div>
        <div>
          <h2>Large</h2>
          <Breadcrumb size="medium" steps={["step1", "step2"]} active={"1"} />
        </div>
      </div>
      <div>
        <div>
          <h2>Large</h2>
          <Badge size="large" shape="overflow" count={10} />
        </div>
      </div>
      <div>
        <div>
          <h2>Large</h2>
          <Field>
            <Select size="small">
              <Option key="US">United States</Option>
              <Option key="CA">Canada</Option>
            </Select>
            <Select size="large">
              <Option key="US">United States</Option>
              <Option key="CA">Canada</Option>
            </Select>
          </Field>
        </div>
      </div>
      <div>
        <Thumbnail
          alt={"imageName"}
          size="medium"
          src={
            "https://cdn.shopify.com/s/files/1/0009/3080/7852/products/16_2_small.jpg?v=1629541016"
          }
        />
      </div>
      <Section>
        <Dropdown color="primary" header={"tesing"}></Dropdown>
      </Section>
    </div>
  );
};

export default App;
