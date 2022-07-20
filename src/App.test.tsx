import React from 'react';
import { render, screen } from '@testing-library/react';
import OlgApp from './OlgApp';

test('renders learn react link', () => {
  render(<OlgApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
