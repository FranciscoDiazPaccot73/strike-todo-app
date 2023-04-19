import { render } from '@testing-library/react'
import CardComponent from "../../components/Card";
describe("Card Component", () => {
  it("Should render Card component with footer", () => {
    const container = render(<CardComponent footer={<p>Footer</p>}><p>It works</p></CardComponent>);
    expect(container).toMatchSnapshot()
  });
});
