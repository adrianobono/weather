import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

test("find bnt with name Reload", () => {
  render(<Footer />);
  const btn: HTMLElement = screen.getByText("Reload");
  expect(btn).toBeInTheDocument();
});
