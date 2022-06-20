import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputCheckbox from "./InputCheckbox";

test("check if element is not being checked on the begining", () => {
  render(<InputCheckbox value={false} />);
  const element = screen.getByTestId("checkbox");
  expect(element).not.toBeChecked();
});

test("check if elements is being checked after click", () => {
  render(<InputCheckbox value={false} />);
  fireEvent.click(screen.getByTestId("checkbox"));
  expect(screen.getByTestId("checkbox")).toBeChecked();
});
