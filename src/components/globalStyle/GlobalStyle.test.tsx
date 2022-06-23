import { GlobalStyle } from "./";

const TestRenderer = require("react-test-renderer");

test("check some styles from element", () => {
  const css = TestRenderer.create(GlobalStyle.defaultProps).toJSON();
  expect(css).toMatchSnapshot();
});
