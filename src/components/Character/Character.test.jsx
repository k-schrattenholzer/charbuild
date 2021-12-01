import { render, screen } from "@testing-library/react";
import Character from "./Character";

it('should display the Character component', () => {
  const {container}= render(<Character head='bat' mid='poncho' bottom='jeans' shoes='tennies'/>);

  const head = screen.getByLabelText(/head/);
  const top = screen.getByLabelText(/mid/);
  const bottom = screen.getByLabelText(/bottom/);
  const shoes = screen.getByLabelText(/shoes/);

  expect(head).toHaveStyle(`background-image: url(./head/bat.png)`);
  expect(top).toHaveStyle(`background-image: url(./middle/poncho.png)`);
  expect(bottom).toHaveStyle(`background-image: url(./bottom/jeans.png)`);
  expect(shoes).toHaveStyle(`background-image: url(./shoes/tennies.png)`);

  expect(container).toMatchSnapshot();
});
