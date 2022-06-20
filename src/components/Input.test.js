/* getByRole('textbox', { name: /imię/i }) */
import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

test("renders input by testid", () => {
  render(<Input name="name" />);
  const element = screen.getByTestId("name");
  expect(element).toBeInTheDocument();
});

test("check if input has got correct value", () => {
  render(<Input value="test" />);
  const element = screen.getByDisplayValue("test");
  expect(element).toBeInTheDocument();
});

test("check if input has got correct placeholder", () => {
  render(<Input name="nip" placeholder="123456789" />);
  expect(screen.getByTestId("nip")).toHaveAttribute("placeholder", "123456789");
});

test("check if input has got correct type", () => {
  render(<Input name="email" type="email" />);
  expect(screen.getByTestId("email")).toHaveAttribute("type", "email");
});
