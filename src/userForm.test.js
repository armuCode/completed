import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component od find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertions -make sure the component is doing

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
