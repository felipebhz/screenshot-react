import { render, screen, queryByTestId, getByTestId, getByAltText } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  expect(screen.getByRole('main', 'img', {alt: /casinoimg/i})).toBeInTheDocument()
});


