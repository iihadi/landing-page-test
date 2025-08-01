import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationBar from '../NavigationBar';
import type { NavLink } from '../../../lib/types';

const mockNavLinks: NavLink[] = [
  { text: 'sports', href: '#', colour: '#00a826' },
  { text: 'casino', href: '#', colour: '#F97316' },
];

describe('NavigationBar', () => {
  it('renders navigation links from props', () => {
    render(<NavigationBar navLinks={mockNavLinks} />);
    expect(screen.getByText('sports')).toBeInTheDocument();
    expect(screen.getByText('casino')).toBeInTheDocument();
  });

  it('sets the first link as active by default', () => {
    render(<NavigationBar navLinks={mockNavLinks} />);
    const sportsLink = screen.getByText('sports');
    expect(sportsLink).toHaveStyle('border-bottom-color: #00a826');
  });

  it('changes the active link on click', () => {
    render(<NavigationBar navLinks={mockNavLinks} />);
    const sportsLink = screen.getByText('sports');
    const casinoLink = screen.getByText('casino');

    // Initially, sports is active
    expect(sportsLink).toHaveStyle('border-bottom-color: #00a826');
    expect(casinoLink).toHaveStyle('border-bottom-color:  rgba(0, 0, 0, 0);');

    // Click on casino
    fireEvent.click(casinoLink);

    // Now, casino is active
    expect(casinoLink).toHaveStyle('border-bottom-color: #F97316');
    expect(sportsLink).toHaveStyle('border-bottom-color:  rgba(0, 0, 0, 0);');
  });
});