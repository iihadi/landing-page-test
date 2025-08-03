import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginModal from '../LoginModal';
import { notifications } from '@mantine/notifications';

// 1. Mock the Mantine notifications module
jest.mock('@mantine/notifications', () => ({
  notifications: {
    show: jest.fn(),
  },
}));

// Mock the global fetch function
global.fetch = jest.fn();

describe('LoginModal', () => {
  const mockOnClose = jest.fn();
  const mockOnSwitch = jest.fn();

  beforeEach(() => {
    // Reset mocks before each test
    (fetch as jest.Mock).mockClear();
    (notifications.show as jest.Mock).mockClear();
    mockOnClose.mockClear();
    mockOnSwitch.mockClear();
  });

  it('renders correctly when open', () => {
    render(<LoginModal isOpen={true} onClose={mockOnClose} onSwitchToSignUp={mockOnSwitch} />);
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<LoginModal isOpen={false} onClose={mockOnClose} onSwitchToSignUp={mockOnSwitch} />);
    expect(screen.queryByRole('heading', { name: /login/i })).not.toBeInTheDocument();
  });

  it('shows validation error if credential is empty', async () => {
    render(<LoginModal isOpen={true} onClose={mockOnClose} onSwitchToSignUp={mockOnSwitch} />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(await screen.findByText('Username or Email is required')).toBeInTheDocument();
  });

  it('shows validation error if password is less than 8 characters', async () => {
    render(<LoginModal isOpen={true} onClose={mockOnClose} onSwitchToSignUp={mockOnSwitch} />);
    fireEvent.change(screen.getByLabelText(/username or email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(await screen.findByText('Password must be at least 8 characters')).toBeInTheDocument();
  });

  // 2. Updated test case for successful login
  it('calls API, shows a notification, and closes on successful login', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: 'John Doe' }),
    });

    render(<LoginModal isOpen={true} onClose={mockOnClose} onSwitchToSignUp={mockOnSwitch} />);
    
    fireEvent.change(screen.getByLabelText(/username or email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/sign-in', expect.any(Object));
      // 3. Assert that the Mantine notification was shown with the correct properties
      expect(notifications.show).toHaveBeenCalledWith({
        title: 'Login Successful',
        message: 'Welcome back, John Doe!',
        color: 'green',
        autoClose: 5000,
      });
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  it('shows API error message on failed login', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Invalid credentials' }),
    });

    render(<LoginModal isOpen={true} onClose={mockOnClose} onSwitchToSignUp={mockOnSwitch} />);

    fireEvent.change(screen.getByLabelText(/username or email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText('Invalid credentials')).toBeInTheDocument();
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});