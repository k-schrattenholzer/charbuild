import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const headerText = screen.getByText(/make a QT/i);
  expect(headerText).toBeInTheDocument();
});
