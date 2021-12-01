import { render, screen } from "@testing-library/react";
import Display from "./Display";

it('should display the Display component', () => {
  const testSayings = ['boy howdy', 'well hey there, cowpoke', 'proud of u']
  const {container}= render(<Display sayings={testSayings} count={3} />);

  const count = screen.getByLabelText(/count/);
  const bucket = screen.getByLabelText(/bucket/);

  expect(count).toBeInTheDocument();
  expect(bucket).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});