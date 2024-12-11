import { fetchAIStudios } from "./fetchAIStudios";

describe("fetchAIStudios", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch AI studios data successfully", async () => {
    //Arrange
    const mockData = [
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

    // Act
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ data: mockData }),
    });
    const result = await fetchAIStudios();

    //Assert
    expect(result).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/ai-studios`
    );
  });

  it("should throw an error if the response is not ok", async () => {
    //Act
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    //Assert
    await expect(fetchAIStudios()).rejects.toThrow(
      "Failed to fetch AI Studios"
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/ai-studios`
    );
  });

  it("should throw an error if fetch fails", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network Error"));

    await expect(fetchAIStudios()).rejects.toThrow("Network Error");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/ai-studios`
    );
  });
});
