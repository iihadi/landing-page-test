import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Promotions from '../Promotions';
import type { promotionsData } from '../../../lib/types';

const mockpromotionsData: promotionsData = {
  title: 'Test Offer',
  subject: 'Test',
  buttonText: 'Test Join Now',
};

describe('Promotions', () => {
  const mockJoinClick = jest.fn();

  it('renders the promotional content from props', () => {
    render(<Promotions promotionsData={mockpromotionsData} onJoinNowClick={mockJoinClick} />);
    expect(screen.getByText('Test Offer')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Test Join Now' })).toBeInTheDocument();
  });

  it('calls the onJoinNowClick handler when the button is clicked', () => {
    render(<Promotions promotionsData={mockpromotionsData} onJoinNowClick={mockJoinClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'Test Join Now' }));
    expect(mockJoinClick).toHaveBeenCalledTimes(1);
  });
});
