import React from 'react';
import { render, screen } from '@testing-library/react';
import { CreditCardHome } from './credit-card';

test('renders new Credit Card Home Component', () => {
  render(<CreditCardHome />);
  const homeComponent = screen.getByText(/Credit Card System/i);
  expect(homeComponent).toBeInTheDocument();
});
