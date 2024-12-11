import { render, screen } from "@testing-library/react";
import StudioItem from "../components/StudioItem";

describe("StudioItem Component", () => {
  const mockProps = {
    id: "Enterprise AI",
    img: "https://example.com/image.jpg",
    title: "ENTERPRISE AI",
    description: "Boost your business productivity with AI",
  };

  it("should render the title correctly", () => {
    render(<StudioItem {...mockProps} />);
    const titleElement = screen.getByRole("heading", {
      name: /enterprise ai/i,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the description correctly", () => {
    render(<StudioItem {...mockProps} />);
    const descriptionElement = screen.getByText(
      /boost your business productivity with ai/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should render the image with correct img", () => {
    const { getByAltText } = render(<StudioItem {...mockProps} />);

    const imageElement = getByAltText(
      "ENTERPRISE AI - Studio image"
    ) as HTMLImageElement;

    const expectedSrc = decodeURIComponent(imageElement.src);
    expect(expectedSrc).toContain(mockProps.img);
  });
});
