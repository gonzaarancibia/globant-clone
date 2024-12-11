export const fetchAIStudios = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai-studios`);
  if (!res.ok) {
    throw new Error("Failed to fetch AI Studios");
  }
  return (await res.json())?.data;
};
