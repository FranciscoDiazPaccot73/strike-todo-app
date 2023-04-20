import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'

import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  it("Should render disabled checkbox", () => {
    const mockProps = { checked: false, name: 'test', className: '', onAction: () => {}, disabled: true };

    const { getByLabelText } = render(
      <Checkbox {...mockProps} />
    );
  
    expect(getByLabelText(/test/i).closest('input')).toBeDisabled();
  });
  it("Should click checkbox", () => {
    const mockProps = { checked: false, name: 'test', className: '', onAction: () => {}, disabled: false };

    render(<Checkbox {...mockProps} />);
    const checkbox = screen.getByLabelText('test');
    fireEvent.click(checkbox)
  });
});
