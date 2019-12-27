import FunBox from "../../src/components/FunBox";
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders the component correctly and reads props", () => {
  const component = mount(<FunBox />);
  expect(component).toHaveProp("hey");
});

it("changes class when selected", () => {
  const component = mount(<FunBox />);
  const selectedDiv = component.find("div");
  selectedDiv.simulate("click");
  let htmlObj = selectedDiv.html();
  expect(htmlObj.includes("selected")).toEqual(true);
});
