import ChatBox from "../../src/components/ChatBox";
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders component with state objects", () => {
  const component = mount(<ChatBox />);

  expect(component).toHaveState("userName", "");
  expect(component).toHaveState("error", "");
});

it("correct divs exist", () => {
  const component = mount(<ChatBox />);

  expect(component.exists(".chat-box")).toEqual(true);
  expect(component.exists(".login-field")).toEqual(true);
  expect(component.exists(".active-error")).toEqual(false);
  expect(component.exists(".chat-box > button")).toEqual(true);
});

it("shows error message if  login is attempted without username present", () => {
  const component = mount(<ChatBox />);
  const loginButton = component.find("button");
  loginButton.simulate("click");
  expect(component).toHaveState("error", "Please enter a valid username");
  expect(component.exists(".active-error")).toEqual(true);
});

it("clears up login prompt", () => {
  const component = mount(<ChatBox />);
  const loginButton = component.find("button");
});
