import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const paragraphElement = screen.getByText(/Hi there theyer okay/i);
  expect(paragraphElement).toBeInTheDocument();
});


