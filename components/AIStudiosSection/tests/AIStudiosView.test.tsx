import { render, screen } from "@testing-library/react";
import AIStudiosView from "../components/AIStudiosView";

describe("AIStudiosView", () => {
  it("renders correctly with study data", () => {
    const mockStudios = [
      {
        id: "1",
        name: "Studio 1",
        img: "https://example.com/img",
        title: "Studio 1 Health",
        description: "description Studio",
      },
      {
        id: "2",
        name: "Studio 2",
        img: "https://example.com/img",
        title: "Studio 2 Finance",
        description: "description Studio",
      },
    ];

    render(<AIStudiosView AIStudios={mockStudios} />);

    expect(screen.getByText("Studio 1 Health")).toBeInTheDocument();
    expect(screen.getByText("Studio 2 Finance")).toBeInTheDocument();
  });

  it("displays an error message when there is no data", () => {
    render(<AIStudiosView AIStudios={null} error={true} />);

    expect(
      screen.getByText(
        /There was an error loading the studios. Please try again later./i
      )
    ).toBeInTheDocument();
  });
});
