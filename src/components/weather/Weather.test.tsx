import { render, screen } from "@testing-library/react";
import Wheather from "./Weather";

test("find bnt with name Reload", () => {
  render(<Wheather />);
  const footer: HTMLElement = document.getElementById("footer")!;
  const header: HTMLElement = document.getElementById("header")!;

  const img: HTMLElement = screen.getByRole("img");
  const btn: HTMLElement = screen.getByText("Reload");
  expect(btn).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
