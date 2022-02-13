import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  //  const linkElement = screen.getByText(/learn react/i);
  //In original demo project home page displays learn react - to test that , this code used
  //  expect(linkElement).toBeInTheDocument();
  const linkElement = screen.getByText(/Go to Registry Page/i);
  expect(linkElement).toBeInTheDocument();
});
