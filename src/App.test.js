import { render, screen } from '@testing-library/react';
import App from './App';

test('renders casino list link', () => {
  render(<App />);
  const linkElement = screen.getByText(/casino list/i);
  expect(linkElement).toBeInTheDocument();
});
