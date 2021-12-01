import { screen, render } from "@testing-library/react";
import Selector from "./Selector";

it('should render the selector component', () => {
  const {container} = render(<Selector />);
  const selectTops = screen.getByLabelText(/tops/);
  const selectBottoms = screen.getByLabelText(/bottoms/);
  const selectShoes = screen.getByLabelText(/shoes/);
  const input = screen.getByLabelText(/whats on yr brain-space?/);

  expect(selectTops).toBeInTheDocument();
  expect(selectBottoms).toBeInTheDocument();
  expect(selectShoes).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(container).toMatchSnapshot();
})