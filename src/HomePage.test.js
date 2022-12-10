import { render, screen, queryByTestId, getByTestId, getByAltText } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  expect(getByAltText(document.documentElement, 'casinoimg')).toBeInTheDocument()
  //expect(getByTestId(document.documentElement, 'svg-element')).toBeInTheDocument()
  //expect(queryByTestId(document.documentElement, 'does-not-exist'),).not.toBeInTheDocument()
});


