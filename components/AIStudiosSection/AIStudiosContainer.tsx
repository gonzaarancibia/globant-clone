import { fetchAIStudios } from "../../helpers/fetchAIStudios";
import AIStudiosSection from "./components/AIStudiosView";

const AIStudiosContainer = async () => {
  let AIStudios = null;
  let error: boolean | unknown = false;

  try {
    AIStudios = await fetchAIStudios();
  } catch (err: unknown) {
    error = err;
  }

  return <AIStudiosSection AIStudios={AIStudios} error={error} />;
};

export default AIStudiosContainer;
