import React from 'react';
import { render, screen } from '@testing-library/react';
import { NewCardForm } from './new-card-form';

test('renders new Credit Card Form Component', () => {
  render(<NewCardForm setCreditCards = {()=>{}}/>);
  const buttonAndTitle = screen.getAllByText(/Add/i);
  const name = screen.getByPlaceholderText(/Name/i);
  const cardLimit = screen.getByPlaceholderText(/Limit/i);
  const cardNumber = screen.getByPlaceholderText(/Card number/i);
  expect(buttonAndTitle).toHaveLength(2)
  expect(name).toBeInTheDocument();
  expect(cardLimit).toBeInTheDocument();
  expect(cardNumber).toBeInTheDocument();
});
