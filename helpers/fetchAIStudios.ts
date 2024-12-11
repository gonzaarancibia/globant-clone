import { getBaseUrl } from "./getBaseUrl";

export const fetchAIStudios = async () => {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/ai-studios`);
  if (!res.ok) {
    throw new Error("Failed to fetch AI Studios");
  }
  return (await res.json())?.data;
};
