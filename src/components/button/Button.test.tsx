import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("render button with text Reload", () => {
  render(<Button>Reload</Button>);

  const buttonEl = screen.getByText(/Reload/i);

  expect(buttonEl).toBeInTheDocument();
});
