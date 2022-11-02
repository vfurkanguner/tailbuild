import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderC from "../../../sections/header/HeaderC";

export default {
  title: "Sections/Header/HeaderC",
  component: HeaderC,
} as ComponentMeta<typeof HeaderC>;

const Template: ComponentStory<typeof HeaderC> = (args) => <HeaderC {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "HeaderC",
  description: "HeaderC description",
  image:
    "https://images.unsplash.com/photo-1611181424369-8c7b0b8f9f0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  date: "2021-01-01",
};
