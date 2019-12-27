import React from "react";
import App from "../../src/App";
import renderer from "react-test-renderer";

test("App tree renders as expected", () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  expect(tree).toMatchSnapshot();
});
