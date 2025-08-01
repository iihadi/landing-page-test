import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

describe('Header', () => {
  const mockLoginClick = jest.fn();
  const mockSignUpClick = jest.fn();

  it('renders the logo and buttons', () => {
    render(
      <Header
        brandName="betway"
        logoUrl="https://betway.com/doc-centre/assets/betway-logo-white-sml.png"
        onLoginClick={mockLoginClick}
        onSignUpClick={mockSignUpClick}
      />
    );

    expect(screen.getByAltText('betway logo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  it('calls onLoginClick when the login button is clicked', () => {
    render(
      <Header
        brandName="betway"
        logoUrl="https://betway.com/doc-centre/assets/betway-logo-white-sml.png"
        onLoginClick={mockLoginClick}
        onSignUpClick={mockSignUpClick}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(mockLoginClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSignUpClick when the sign up button is clicked', () => {
    render(
      <Header
        brandName="betway"
        logoUrl="https://betway.com/doc-centre/assets/betway-logo-white-sml.png"
        onLoginClick={mockLoginClick}
        onSignUpClick={mockSignUpClick}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));
    expect(mockSignUpClick).toHaveBeenCalledTimes(1);
  });
});