import { fetchAIStudios } from "../../helpers/fetchAIStudios";
import AIStudiosSection from "./components/AIStudiosView";

const AIStudiosContainer = async () => {
  let AIStudios = null;
  let error: boolean | unknown = false;
  let baseUrl: string = "";

  try {
    const response = await fetchAIStudios();
    baseUrl = response.baseUrl || "";
    AIStudios = response.aiStudios;
  } catch (err: unknown) {
    console.error("Error fetching AI Studios:", err);
    error = err;
  }

  return (
    <AIStudiosSection AIStudios={AIStudios} error={error} baseUrl={baseUrl} />
  );
};

export default AIStudiosContainer;
