import React from 'react';
import { render } from '@testing-library/react'

import CardFooterComponent from "../CardFooter";

import { PageContext, contextDefaultValues } from '../../store';

describe("Card Footer Component", () => {
  it("Card Footer component with all buttons disabled", () => {
    const initialMockState = { ...contextDefaultValues };
    initialMockState.state = { ...initialMockState.state, isFetching: true, remainingLength: 1 };

    const mockProps = { length: 1, filterApplied: 'All', setFilter: () => {} }

    const { getByText } = render(
      <PageContext.Provider value={initialMockState}>
        <CardFooterComponent {...mockProps} />
      </PageContext.Provider>
    );
  
    expect(getByText(/Clear completed/i).closest('button')).toBeDisabled();
    expect(getByText(/Active/i).closest('button')).toBeDisabled();
    expect(getByText("Completed").closest('button')).toBeDisabled();
  });
});
