import React from 'react';
import { render } from '@testing-library/react'
import Footer from "../Footer";

describe("Footer", () => {
  it("Should render Footer component", () => {
    const container = render(<Footer />);
    expect(container).toMatchSnapshot()
  });
});
