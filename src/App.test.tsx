import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders new Credit Card Form Component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Credit Card System/i);
  expect(linkElement).toBeInTheDocument();
});
