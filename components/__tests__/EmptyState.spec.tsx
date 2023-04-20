import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import EmptyState from "../EmptyState";

describe("EmptyState", () => {
  it("Should render component", () => {
    const container = render(<EmptyState />);
    expect(container).toMatchSnapshot()
  });

  it("Should handle click", () => {
    render(<EmptyState />);
    const button = screen.getByText('Start adding a task :)');
    fireEvent.click(button)
  });
});
