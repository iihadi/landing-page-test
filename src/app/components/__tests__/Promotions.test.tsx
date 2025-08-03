import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Promotions from '../Promotions';
import type { PromotionData } from '../../../lib/types';

// The mock data should now be an array
const mockPromotionsData: PromotionData[] = [
  {
    id: 0,
    title: 'Test Offer',
    subtitle: 'Test subtitle',
    buttonText: 'Test Join Now',
    action: 'test_action', // Added for completeness
  },
];

describe('Promotions', () => {
  const mockJoinClick = jest.fn();

  // Reset the mock function before each test
  beforeEach(() => {
    mockJoinClick.mockClear();
  });

  it('renders the promotional content from props', () => {
    // Pass the data to the 'promotions' prop (plural)
    render(<Promotions promotions={mockPromotionsData} onJoinNowClick={mockJoinClick} />);
    expect(screen.getByText('Test Offer')).toBeInTheDocument();
    expect(screen.getByText('Test subtitle')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Test Join Now' })).toBeInTheDocument();
  });

  it('calls the onJoinNowClick handler when the button is clicked', () => {
    // Pass the data to the 'promotions' prop (plural)
    render(<Promotions promotions={mockPromotionsData} onJoinNowClick={mockJoinClick} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Test Join Now' }));
    
    expect(mockJoinClick).toHaveBeenCalledTimes(1);
  });
});