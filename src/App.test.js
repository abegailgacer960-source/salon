import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site brand', () => {
  render(<App />);
  expect(screen.getByLabelText(/maylyn logo/i)).toBeInTheDocument();
  expect(
    screen.getByText(/your trusted salon, barber and spa/i)
  ).toBeInTheDocument();
});
