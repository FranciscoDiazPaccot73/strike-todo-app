import React from 'react';
import { render } from '@testing-library/react'
import CardComponent from "../Card";

describe("Card Component", () => {
  it("Should render Card component with footer", () => {
    const container = render(<CardComponent><p>It works</p></CardComponent>);
    expect(container).toMatchSnapshot()
  });
});
