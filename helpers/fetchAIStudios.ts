export const fetchAIStudios = async () => {
  const res = await fetch("/api/ai-studios");
  if (!res.ok) {
    throw new Error("Failed to fetch AI Studios");
  }
  return (await res.json())?.data;
};
