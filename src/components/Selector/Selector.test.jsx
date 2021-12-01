import { screen, render } from "@testing-library/react";
import Selector from "./Selector";

it('should render the selector component', () => {
  const {container} = render(<Selector />);
  const selectHead = screen.getByLabelText(/face-space/);
  const selectMid = screen.getByLabelText(/tops/);
  const selectBottoms = screen.getByLabelText(/bottoms/);
  const selectShoes = screen.getByLabelText(/shoes/);
  const input = screen.getByLabelText(/whats on yr brain-space?/);

  expect(selectHead).toBeInTheDocument();
  expect(selectMid).toBeInTheDocument();
  expect(selectBottoms).toBeInTheDocument();
  expect(selectShoes).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(container).toMatchSnapshot();
})