import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpModal from '../SignUpModal';

describe('SignUpModal', () => {
  const mockOnClose = jest.fn();
  const mockOnSwitch = jest.fn();

  it('renders correctly when open', () => {
    render(<SignUpModal isOpen={true} onClose={mockOnClose} onSwitchToLogin={mockOnSwitch} />);
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument();
  });

  it('calls onSwitchToLogin when the login link is clicked', () => {
    render(<SignUpModal isOpen={true} onClose={mockOnClose} onSwitchToLogin={mockOnSwitch} />);
    fireEvent.click(screen.getByText(/login here/i));
    expect(mockOnSwitch).toHaveBeenCalledTimes(1);
  });
});