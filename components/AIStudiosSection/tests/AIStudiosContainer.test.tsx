import { render, screen } from "@testing-library/react";
import AIStudiosContainer from "../AIStudiosContainer";
import { fetchAIStudios } from "../../../helpers/fetchAIStudios";

// Mock del módulo que contiene fetchAIStudios
jest.mock("../../../helpers/fetchAIStudios");

describe("AIStudiosContainer", () => {
  it("renders correctly when fetchAIStudios succeeds", async () => {
    // Configurar el mock para devolver datos simulados
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

    (fetchAIStudios as jest.Mock).mockResolvedValue(mockStudios);

    // Renderizar el componente
    render(await AIStudiosContainer());

    // Verificar que los datos simulados se renderizan
    expect(screen.getByText("Studio 1 Health")).toBeInTheDocument();
    expect(screen.getByText("Studio 2 Finance")).toBeInTheDocument();
  });

  it("display an error message when fetchAIStudios fails", async () => {
    // Configurar el mock para lanzar un error
    (fetchAIStudios as jest.Mock).mockRejectedValue(new Error("Network error"));

    // Renderizar el componente
    render(await AIStudiosContainer());

    // Verificar que el mensaje de error se muestra
    expect(
      screen.getByText(
        /There was an error loading the studios. Please try again later./i
      )
    ).toBeInTheDocument();
  });
});
